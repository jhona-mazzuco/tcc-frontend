import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of, throwError } from "rxjs";
import { environment } from "../../../../../../../environments/environment";
import { NotificationService } from "../../../../shared/services/notification.service";
import { AuthService } from "../../services/auth.service";
import { INVALID_EMAIL } from "../login/constants/invalid-email.constant";
import { FEEDBACK_MESSAGES } from "./constant/feedback-messages.constant";

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let fb: UntypedFormBuilder;
  let service: AuthService;
  let router: Router;
  let notification: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        AngularFireAuthModule,
        MatSnackBarModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      providers: [AuthService, NotificationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(UntypedFormBuilder);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    notification = TestBed.inject(NotificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be ngOnInit', () => {
    const initFormSpy = spyOn(component, 'initForm').and.stub();

    component.ngOnInit();

    expect(initFormSpy).toHaveBeenCalled();
  });

  it('should be initForm', () => {
    const groupSpy = spyOn(fb, 'group')
      .and
      .stub()
      .and
      .returnValue(new UntypedFormGroup({}));

    component.initForm();

    expect(component.form).toBeDefined();
    expect(groupSpy).toHaveBeenCalledWith({
      email: [null, [Validators.required, Validators.email]]
    });
  });

  describe('should be onSubmit', () => {
    let markAllAsTouchedSpy: jasmine.Spy;
    let validSpy: jasmine.Spy;
    let sendSpy: jasmine.Spy;

    beforeEach(() => {
      component.form = new UntypedFormGroup({
        test: new UntypedFormControl(null, Validators.required)
      });

      markAllAsTouchedSpy = spyOn(component.form, 'markAllAsTouched').and.stub();
      validSpy = spyOnProperty(component.form, 'valid').and.callThrough();
      sendSpy = spyOn(component, 'send').and.stub();
    });

    it('when has valid form', () => {
      component.form.get('test')?.setValue(1);

      component.onSubmit();

      expect(markAllAsTouchedSpy).toHaveBeenCalled();
      expect(validSpy).toHaveBeenCalled();
      expect(sendSpy).toHaveBeenCalled();
    });

    it('when has invalid form', () => {
      component.onSubmit();

      expect(markAllAsTouchedSpy).toHaveBeenCalled();
      expect(validSpy).toHaveBeenCalled();
      expect(sendSpy).not.toHaveBeenCalled();
    });
  });

  describe('should be send', () => {
    let passwordRecoverySpy: jasmine.Spy;
    const email = 'test@email';

    beforeEach(() => {
      component.loading = true;
      component.form = new UntypedFormGroup({
        email: new UntypedFormControl(email)
      });

      passwordRecoverySpy = spyOn(service, 'passwordRecovery');
    });

    afterEach(() => expect(component.loading).toBeFalse());

    it('when has successful', () => {
      const onSendSuccessSpy = spyOn(component, 'onSendSuccess').and.stub();
      passwordRecoverySpy.and.returnValue(of(null));

      component.send();

      expect(passwordRecoverySpy).toHaveBeenCalledWith(email);
      expect(onSendSuccessSpy).toHaveBeenCalled();
    });

    it('when has error', () => {
      const code = 'test';

      const onSendErrorSpy = spyOn(component, 'onSendError').and.returnValue(of(null));
      passwordRecoverySpy.and.returnValue(throwError({ code }))

      component.send();

      expect(passwordRecoverySpy).toHaveBeenCalledWith(email);
      expect(onSendErrorSpy).toHaveBeenCalledWith(code);
    });
  });

  it('should be onSendSuccess', () => {
    const successSpy = spyOn(notification, 'success').and.stub();
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl').and.stub();

    component.onSendSuccess();

    expect(successSpy).toHaveBeenCalledWith(FEEDBACK_MESSAGES.SUCCESS);
    expect(navigateByUrlSpy).toHaveBeenCalledWith('painel/login');
  });

  describe('should be onSendError', () => {
    it('when has invalid email code', () => {
      const successSpy = spyOn(notification, 'success').and.stub();

      component.onSendError(INVALID_EMAIL);

      expect(successSpy).toHaveBeenCalledWith(FEEDBACK_MESSAGES.SUCCESS);
    });

    it('when has any error', () => {
      const errorSpy = spyOn(notification, 'error').and.stub();

      component.onSendError('test');

      expect(errorSpy).toHaveBeenCalledWith(FEEDBACK_MESSAGES.ERROR);
    });
  });
});

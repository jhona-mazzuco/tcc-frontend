import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/compat/auth";
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of, throwError } from "rxjs";
import { environment } from "../../../../../../../environments/environment";
import { AuthService } from "../../services/auth.service";
import { FEEDBACK_MESSAGES } from "./constants/feedback-messages.constant";

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fb: UntypedFormBuilder;
  let service: AuthService;
  let router: Router;
  let snackbar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService, AngularFireAuth]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(UntypedFormBuilder);
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    snackbar = TestBed.inject(MatSnackBar);
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
      .and.stub()
      .and.returnValue(new UntypedFormGroup({}));

    component.initForm();

    expect(component.form).toBeDefined();
    expect(groupSpy).toHaveBeenCalledWith({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  });

  describe('should be onSubmit', () => {
    let markAllAsTouchedSpy: jasmine.Spy;
    let validSpy: jasmine.Spy;
    let signInSpy: jasmine.Spy;

    beforeEach(() => {
      component.form = new UntypedFormGroup({
        test: new UntypedFormControl(null, Validators.required)
      });

      markAllAsTouchedSpy = spyOn(component.form, 'markAllAsTouched').and.stub();
      validSpy = spyOnProperty(component.form, 'valid', 'get').and.callThrough();
      signInSpy = spyOn(component, 'signIn').and.stub();
    });

    it('when has valid form', () => {
      component.form.get('test')?.setValue(1);

      component.onSubmit();

      expect(markAllAsTouchedSpy).toHaveBeenCalled();
      expect(validSpy).toHaveBeenCalled();
      expect(signInSpy).toHaveBeenCalled();
    });

    it('when has invalid form', () => {
      component.onSubmit();

      expect(markAllAsTouchedSpy).toHaveBeenCalled();
      expect(validSpy).toHaveBeenCalled();
      expect(signInSpy).not.toHaveBeenCalled();
    });
  });

  describe('should be signIn', () => {
    const email = 'test@email';
    const password = 'test123';

    let signInSpy: jasmine.Spy;

    beforeEach(() => {
      component.loading = true;
      component.form = new UntypedFormGroup({
        email: new UntypedFormControl(email),
        password: new UntypedFormControl(password)
      });

      signInSpy = spyOn(service, 'signIn');
    });

    it('when successful', () => {
      signInSpy.and.returnValue(of({}));
      const onSignInSuccessSpy = spyOn(component, 'onSignInSuccess').and.stub();

      component.signIn();

      expect(signInSpy).toHaveBeenCalledWith(email, password);
      expect(onSignInSuccessSpy).toHaveBeenCalled();
      expect(component.loading).toBeFalse();
    });

    it('when has error', () => {
      signInSpy.and.returnValue(throwError({}));
      const catchErrorSpy = spyOn(component, 'catchError').and.returnValue(of(null));

      component.signIn();

      expect(signInSpy).toHaveBeenCalledWith(email, password);
      expect(catchErrorSpy).toHaveBeenCalledWith(FEEDBACK_MESSAGES.EMAIL_OR_PASSWORD_WRONG);
      expect(component.loading).toBeFalse();
    });
  });

  it('should be onSignInSuccess', () => {
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl').and.stub();

    component.onSignInSuccess();

    expect(navigateByUrlSpy).toHaveBeenCalledWith('/painel');
  });
});

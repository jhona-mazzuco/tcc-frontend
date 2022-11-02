import { TestBed } from '@angular/core/testing';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import { of } from 'rxjs';
import { AuthService } from './auth.service';

const userMock = {
  email: 'test@email.com'
} as firebase.User;

describe('AuthService', () => {
  let service: AuthService;
  let authentication: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireAuthModule],
      providers: [
        {
          provide: AngularFireAuth,
          useValue: {
            currentUser: of(userMock).toPromise(),
            signInWithEmailAndPassword: () => of().toPromise(),
            signOut: () => of().toPromise(),
            sendPasswordResetEmail: (email: string) => of().toPromise()
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    authentication = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be passwordRecovery', () => {
    const email = 'test@email';
    const sendPasswordResetEmailSpy = spyOn(authentication, 'sendPasswordResetEmail').and.returnValue(of().toPromise());

    service.passwordRecovery(email).subscribe(() => {
    });

    expect(sendPasswordResetEmailSpy).toHaveBeenCalledWith(email);
  });
});

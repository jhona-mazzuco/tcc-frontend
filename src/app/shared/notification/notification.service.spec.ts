import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { BASE_SNACKBAR_CONFIG } from "../constants/base-snackbar-config.constant";
import { NotificationService } from './notification.service';

const message = 'message';

describe('NotificationService', () => {
  let service: NotificationService;

  let openSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [MatSnackBar]
    });
    service = TestBed.inject(NotificationService);
    const snackbar = TestBed.inject(MatSnackBar);
    openSpy = spyOn(snackbar, 'open').and.stub();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be success', () => {
    service.success(message);
    expect(openSpy).toHaveBeenCalledWith(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-success'] });
  });

  it('should be warn', () => {
    service.warn(message);
    expect(openSpy).toHaveBeenCalledWith(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-warn'] });
  });

  it('should be info', () => {
    service.info(message);
    expect(openSpy).toHaveBeenCalledWith(message, undefined, { ...BASE_SNACKBAR_CONFIG, panelClass: ['snackbar-info'] });
  });
});

import { TestBed } from '@angular/core/testing';

import { PreviewModalService } from './preview-modal.service';

describe('PreviewModalService', () => {
  let service: PreviewModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { TranslateInitializerServiceService } from './translate-initializer.service';

describe('TranslateInitializerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateInitializerServiceService]
    });
  });

  it('should be created', inject([TranslateInitializerServiceService], (service: TranslateInitializerServiceService) => {
    expect(service).toBeTruthy();
  }));
});

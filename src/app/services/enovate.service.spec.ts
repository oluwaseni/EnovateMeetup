import { TestBed } from '@angular/core/testing';

import { EnovateService } from './enovate.service';

describe('EnovateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnovateService = TestBed.get(EnovateService);
    expect(service).toBeTruthy();
  });
});

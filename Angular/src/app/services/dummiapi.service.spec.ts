import { TestBed } from '@angular/core/testing';

import { DummiapiService } from './dummiapi.service';

describe('DummiapiService', () => {
  let service: DummiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

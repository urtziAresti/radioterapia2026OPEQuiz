import { TestBed } from '@angular/core/testing';

import { Mongo } from './mongo';

describe('Mongo', () => {
  let service: Mongo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mongo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

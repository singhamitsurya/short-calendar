import { TestBed } from '@angular/core/testing';

import { ShortCalendarService } from './short-calendar.service';

describe('ShortCalendarService', () => {
  let service: ShortCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServerApiService } from './server-api.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ServerApiService', () => {
  let service: ServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

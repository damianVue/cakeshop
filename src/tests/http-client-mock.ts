import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientMock extends HttpClient {
  constructor() {
    super(null);
  }
}

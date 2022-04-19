import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse, Rates } from '../models/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private http:HttpClient) { }

  public loadRate(){
    return this.http.get<DataResponse>('https://api.frankfurter.app/latest?from=EUR&to=USD');
  }
}

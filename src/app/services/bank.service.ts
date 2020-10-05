import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { BankDetails } from '../model/bank-details';


const ROOT_URL : string = "https://ifsc.razorpay.com/"


@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) {}

  getBranchData(code: string): Observable<BankDetails>{
     return this.http.get<BankDetails>(ROOT_URL + code)

  }
}

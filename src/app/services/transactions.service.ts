import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.transactionsApiUrl;
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  transactionDetails: any;
  constructor(private http: HttpClient) {}

  getTransactionsData() {
    return this.http.get('https://reqres.in/api/users');
  }
  getSingleTransactionData(id) {
    return this.http.get('https://reqres.in/api/users/3');
  }


}

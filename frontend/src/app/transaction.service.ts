import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private apiUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
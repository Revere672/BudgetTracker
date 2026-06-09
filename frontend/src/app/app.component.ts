import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Budget Tracker</h1>
    <ul>
      <li *ngFor="let t of transactions">{{ t }}</li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  transactions: string[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => this.transactions = data,
      error: (err) => console.error('API error:', err)
    });
  }
}
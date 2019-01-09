import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactions: any;
  constructor(private transactionsService: TransactionsService, private router: Router) { }

  ngOnInit() {
    this.transactionsService.getTransactionsData().subscribe(data => {
      console.log(data);
      this.transactions = data;
    });
  }

  onGoToSingleTransaction(transaction)  {
    this.transactionsService.transactionDetails = transaction;
    this.router.navigate(['/single-transaction']);
  }

}

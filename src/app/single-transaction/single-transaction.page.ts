import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';
@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.page.html',
  styleUrls: ['./single-transaction.page.scss'],
})
export class SingleTransactionPage implements OnInit {
  transaction;
  details: any;
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transaction = this.transactionsService.transactionDetails;
    /*console.log(this.transactionsService.transactionDetails);*/

    this.transactionsService.getSingleTransactionData(this.transaction.id).subscribe(data => {
      console.log(data);
      this.details = data;
    });

  }

}

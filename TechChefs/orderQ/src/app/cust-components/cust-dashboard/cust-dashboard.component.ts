// Created by customer team - Mykola, Margaret, Aviv

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CartComponent, {
      height: '275px', width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

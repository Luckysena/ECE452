import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Order } from './order'
import { Item } from './item'
import { Table } from './table'
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})

export class PlaceOrderComponent implements OnInit {

  cart;
  table;
  numGuests;
  receipt;
  status: string;

  constructor( private cookieService: CookieService, private db: AngularFireDatabase, private datePipe: DatePipe) {}

  menuObservable: Observable<any[]>;

  getInv(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getQuantity(key: string): number {
    return Number(this.cookieService.get(key));
  }

  isValidInput(): boolean {
    return (this.table !== undefined && this.numGuests != undefined && this.table > 0 && this.numGuests > 0);
  }

  add(key: string): void {
    var num;
    if(this.cookieService.check(key) == true) {
      num = Number(this.cookieService.get(key));
      num++;
    } else {
      num = 1;
    }
    this.cookieService.set(key, String(num));
  }

  remove(key: string): void {
    var num;
    if(this.cookieService.check(key) == true) {
      num = Number(this.cookieService.get(key));
      if (num > 0) {
        num--;
      }
    } else {
      num = 0;
    }
    this.cookieService.set(key, String(num));
  }

  pushOrder(): void {
      this.status = "Table " + this.table + " is sat and waiting for their food.";
      let tab = new Table(this.status, this.table, String(Date()));
      this.db.list('/Table Status').push(tab);
      let items = new Array<Item>();
      for (let key of this.cart) {
         items.push(new Item(key, this.getQuantity(key)));
      }
      let order = new Order(items, this.table, this.numGuests, String(Date.now()));
      this.db.list('/Orders').push(order);
      this.cookieService.deleteAll();
  }

  isItem(item: string, x:string, price: string): boolean{
    if(item==x){
      var a = parseFloat(price);
      return true;
    }
    return false;
  }

  getPrice(singleItemPrice: number, name: string): string{
    var itemPrice = singleItemPrice * this.getQuantity(name);
    if (!this.receipt.includes(singleItemPrice)) {
      this.receipt.push(singleItemPrice);
    }
    return itemPrice.toFixed(2);
  }

  getTotal(): string {
    var totalPrice = 0;
    for (let i in this.receipt) {
      totalPrice += this.receipt[i] * this.getQuantity(this.cart[i]);
    }
    return totalPrice.toFixed(2);
  }

  ngOnInit(): void{
    this.menuObservable = this.getInv('/menu');
    this.cart = new Array<String>();
    this.receipt = new Array<Number>();
    var allCookies = this.cookieService.getAll();
    for (let key in allCookies) {
      this.cart.push(key);
    }
  }


}

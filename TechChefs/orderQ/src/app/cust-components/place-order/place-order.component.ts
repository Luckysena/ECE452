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
import { OrderService } from './order.service';

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
  totalPrice = 0;

  constructor( private cookieService: CookieService, private db: AngularFireDatabase, private datePipe: DatePipe,private afs: AngularFirestore, public ord: OrderService ) {}

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
      let items = new Array<Item>();
      for (let key of this.cart) {
         items.push(new Item(key, this.getQuantity(key)));
      }
      let order = new Order(items, this.table, this.numGuests, String(Date.now()));
      this.db.list('/Orders').push(order);
      this.ord.addOrder(order);
      this.status = "Table " + this.table + " is sat and waiting for their food.";
      let table = new Table(this.status, this.table, String(Date()));
      this.db.list('/Table Status');
      // this.afs.collection('/Orders').add(order).then(()=>{
      //   console.log('Done');
      // });
      this.cookieService.deleteAll();
  }

  isItem(item: string, x:string, price: string): boolean{
    if(item==x){
      var a = parseFloat(price);
      this.receipt.push(a);
      return true;
    }
    return false;
  }

  total(): number{
    for(let p of this.receipt){
      console.log(p);
      this.totalPrice = this.totalPrice + p;
    }
    console.log(this.totalPrice);
    return this.totalPrice;
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

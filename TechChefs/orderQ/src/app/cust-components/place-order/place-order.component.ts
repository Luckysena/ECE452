import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Order } from './order'
import { Item } from './item'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})

export class PlaceOrderComponent implements OnInit {

  cart;
  table;
  numGuests;

  constructor( private cookieService: CookieService, private db: AngularFireDatabase, private datePipe: DatePipe ) {}

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
      this.cookieService.deleteAll();
  }

  ngOnInit(): void{
    this.cart = new Array<String>();
    var allCookies = this.cookieService.getAll();
    for (let key in allCookies) {
      this.cart.push(key);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Order } from './order'
import { Item } from './item'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  cart;
  table;
  numGuests;

  constructor( private cookieService: CookieService, private db: AngularFireDatabase, private datePipe: DatePipe ) {}

  getQuantity(key: string): number {
    return Number(this.cookieService.get(key));
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
  
  

  ngOnInit(): void{
    this.cart = new Array<String>();
    var allCookies = this.cookieService.getAll();
    for (let key in allCookies) {
      this.cart.push(key);
    }
  }

}

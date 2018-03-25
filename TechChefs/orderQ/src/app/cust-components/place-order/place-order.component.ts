import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  cart;
  constructor( private cookieService: CookieService ) {}

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
    this.cart = new Array<String>;
    var allCookies = this.cookieService.getAll();
    for (let key in allCookies) {
      this.cart.push(key);
    }
  //  this.cart = JSON.parse(JSON.stringify(cookies));
    //console.log(this.cart);
  }

}

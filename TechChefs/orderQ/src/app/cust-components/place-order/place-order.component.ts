import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  cart[] = [];

  constructor( private cookieService: CookieService ) {}

  ngOnInit(): void{
    cart = this.cookieService.getAll();
  }

}

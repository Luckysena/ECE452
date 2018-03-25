import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

  cookieValue = 'UNKNOWN';
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

  constructor( private cookieService: CookieService ) { }
  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.add('Test');
    this.add('Test');
    this.add('Chicken');
    this.remove('Chicken');
    console.log(this.cookieService.getAll());
  }
}

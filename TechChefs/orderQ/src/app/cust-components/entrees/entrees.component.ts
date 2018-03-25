import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

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
  menuObservable: Observable<any[]>;


  getInv(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  constructor( private cookieService: CookieService, private db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.menuObservable = this.getInv('/menu');
  }
}

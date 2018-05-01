import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css'],
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

  imageURL;
  beefImages;
  entrees;
  chickenImages;
  fishImages;

  isBeefEntree(item: string): boolean{
    if(item=='Beef Entree'){
      return true;
    }
    return false;
  }

  isChickenEntree(item: string): boolean{
    if(item=='Chicken Entree'){
      return true;
    }
    return false;
  }

  isFishEntree(item: string): boolean{
    if(item=='Fish Entree'){
      return true;
    }
    return false;
  }

  confirmed(){
    confirm("Item added to cart!");
  }

  both(key: string){
    this.confirmed();
    this.add(key);
  }



  constructor( private cookieService: CookieService, private db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.menuObservable = this.getInv('/menu');
    this.imageURL = '../../../assets/images/';
    this.beefImages = ['filet_mingon.jpg','rib_eye.jpg'];
    this.chickenImages = ['chicken_parm.jpg','chicken_alfredo.jpg'];
    this.fishImages = ['salmon.jpg','shrimp_scampi.jpg'];
  }
}

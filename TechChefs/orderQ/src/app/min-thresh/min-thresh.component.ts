import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Order } from '../cust-components/place-order/order';
import { Item } from '../cust-components/place-order/item';
import { EntreesComponent } from '../cust-components/entrees/entrees.component';



@Component({
  selector: 'app-min-thresh',
  templateUrl: './min-thresh.component.html',
  styleUrls: ['./min-thresh.component.css']
})
export class MinThreshComponent implements OnInit {
  orderObservable: Observable<any[]>;


  getInv(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  // imageURL;
  // beefImages;
  // entrees;
  // chickenImages;
  // fishImages;
  //
  // isBeefEntree(item: string): boolean{
  //   if(item=='Beef Entree'){
  //     return true;
  //   }
  //   return false;
  // }
  //
  // isChickenEntree(item: string): boolean{
  //   if(item=='Chicken Entree'){
  //     return true;
  //   }
  //   return false;
  // }
  //
  // isFishEntree(item: string): boolean{
  //   if(item=='Fish Entree'){
  //     return true;
  //   }
  //   return false;
  // }

  confirmed(){
    confirm("Item added to cart!");
  }



  constructor(  private db: AngularFireDatabase) { }
  ngOnInit(): void {
    this.orderObservable = this.getInv('/Orders');
    // this.imageURL = '../../../assets/images/';
    // this.beefImages = ['filet_mingon.jpg','rib_eye.jpg'];
    // this.chickenImages = ['chicken_parm.jpg','chicken_alfredo.jpg'];
    // this.fishImages = ['salmon.jpg','shrimp_scampi.jpg'];
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	
	table: number[];
	seats: number[];
	entrees: string[];
	sides: string[];
	time: string;
	isSearch: boolean = false;
	ordObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router) { 
		
	}

  ngOnInit() {
	this.ordObservable = this.getOrd('/Orders');
  	this.table = [43, 25, 34] ;
  	this.seats = [1, 2, 3, 4];
  	this.sides = ['Broccoli', 'Mashed Potatoes', 'Carrots', 'Mac and Cheese'];
  	this.time ='5:00';
  }
	getOrd(listPath): Observable<any[]> {
		return this.db.list(listPath).valueChanges();
  }

  clearOrder(){
  
  }
  toggSearch(){
  this.isSearch=!this.isSearch;
  }
  searchOrder(tNum){
   

    this.router.navigate(['/table/43']);
  }
  deleteOrder(){

  }
  viewInv(){
  this.router.navigate(['/inventory']);
  }
}
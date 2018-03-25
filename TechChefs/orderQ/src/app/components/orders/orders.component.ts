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
	isSearch: boolean = false;
	ordObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router) {

	}

  ngOnInit() {
	this.ordObservable = this.getOrd('/Orders');
  	this.table = [43, 25, 34] ;
  	this.seats = [1, 2, 3, 4];
  	this.sides = ['Broccoli', 'Mashed Potatoes', 'Carrots', 'Mac and Cheese'];
  }
	getOrd(listPath): Observable<any[]> {
		return this.db.list(listPath).valueChanges();
  }

  clearOrder1(){
    resetClock1();
  }
  clearOrder2(){

  }
  clearOrder3(){

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
//JS Timer for the tickets
var sec = 0;
var sec1 = 0;
var sec2 = 0;
var s0, s1, s2;
function pad ( val ) { return val > 9 ? val : "0" + val; }

setInterval( clockOne, 1000);
function clockOne(){
  document.getElementById("seconds").innerHTML=pad(++sec%60);
  s0 = sec/60;
  var min0= s0.toString();
  document.getElementById("minutes").innerHTML=pad(parseInt(min0,10));
  if(s0>=7){
    document.getElementById("ticket0").style.backgroundColor = "yellow";
  }
  else if(s0>=10){
    document.getElementById("ticket0").style.backgroundColor = "red";
  }
  else{
    document.getElementById("ticket0").style.backgroundColor = "white";
  }
}
function resetClock1(){
  sec = 0;
  s0 =0;
}

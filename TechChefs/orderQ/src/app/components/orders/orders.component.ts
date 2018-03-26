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
//    resetClock1();
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
function initTime(){
  var iTime = new Date();
  var iM = iTime.getTime();
  return iM;
}
var iMill = initTime();
var c = document.getElementsByClassName("clock");
var j = 0;
setInterval(function(){myTime(j)}, 1000);
//var iMill = [];
while(j<c.length)
{
  //iMill[j] = initTime();
  myTime(j);
  j++;
}

function myTime(j) {
  var cTime = new Date();
  var cMill = cTime.getTime();
  var tMill = cMill - iMill;
  var tSec = Math.round(tMill/1000);
  var t2Sec = ++tSec%60;
  var tMin = Math.floor(tSec/60);
  var sec = t2Sec.toString();
  var min = tMin.toString();
  min = checkTime(min);
  sec = checkTime(sec);
  for(var i =0; i < c.length; i++){
    document.getElementsByClassName("clock")[i].innerHTML = min + ":" + sec;
    let  colElements = document.getElementsByClassName("column") as HTMLCollectionOf<HTMLElement>;
    if(tMin<7){
      colElements[i].style.backgroundColor = "white";
    }
    else if(tMin>=7&&tMin<10){
      colElements[i].style.backgroundColor = "yellow";
    }
    else if(tMin>=10){
      colElements[i].style.backgroundColor = "red";
    }
  }
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DataService} from '../../services/data.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: AngularFireList<any[]>;
  index: number = 0;
	seats: number[];
	entrees: string[];
	sides: string[];
	isSearch: boolean = false;
	ordObservable: Observable<any[]>;
	ordObservable1: Observable<any[]>;
	ordObservable2: Observable<any[]>;
	ordObservable3: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router, private dServe: DataService) {

	}

  ngOnInit() {
	   this.ordObservable = this.getOrd('/Orders');
    }
	getOrd(listPath): Observable<any[]> {
		return this.db.list(listPath).valueChanges();
  }
  orderReady(){
  }
  clearOrder1(){
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
  logout(){
    this.dServe.logout();
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
//dataRet();
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

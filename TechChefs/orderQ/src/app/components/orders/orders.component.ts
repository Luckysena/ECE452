import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
	table: number;
	seats: number[];
	entrees: string[];
	sides: string[];
	time: string;
  isSearch: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  	this.table = 43;
  	this.seats = [1, 2, 3, 4];
  	this.entrees = ['Steak', 'Steak', 'Chicken', 'Fish'];
  	this.sides = ['Broccoli', 'Mashed Potatoes', 'Carrots', 'Mac and Cheese'];
  	this.time ='5:00';
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
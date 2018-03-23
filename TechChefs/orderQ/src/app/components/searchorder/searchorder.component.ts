import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-searchorder',
  templateUrl: './searchorder.component.html',
  styleUrls: ['./searchorder.component.css']
})
export class SearchorderComponent implements OnInit {
	table: number;
	seats: number[];
	entrees: string[];
	sides: string[];
	time: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  	this.table = 43;
  	this.seats = [1, 2, 3, 4];
  	this.entrees = ['Steak', 'Steak', 'Chicken', 'Fish'];
  	this.sides = ['Broccoli', 'Mashed Potatoes', 'Carrots', 'Mac and Cheese'];
  	this.time ='5:00';
  }
  backToQueue(){
  this.router.navigate(['/queue'])
  }
  deleteOrder(){
  }
  alertServer(){
  }
  
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  isAlert: boolean = false;
  alerts: Array<any>;
  interval: number;

  constructor(private dServe: DataService, private router: Router) {}

  ngOnInit() {
  }

  logout(){
    this.dServe.logout();
  }
  goMenu(){
    this.dServe.goMenu();
  }
  toggAlert(){
  this.isAlert=!this.isAlert;
  }
}



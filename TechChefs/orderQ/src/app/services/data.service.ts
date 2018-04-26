import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class DataService {

  constructor(private router: Router) { }
  logout(){
    this.router.navigate(['/login']);
  }
  goMenu(){
    this.router.navigate(['/entree']);
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Table } from './table'
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servAl: AngularFireList<any[]>;
  tabStat: AngularFireList<any[]>;
  isAlert: boolean = false;
  status: string;
  interval: number;
  tNum: string;
  salObservable: Observable<any[]>;
  tabObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private dServe: DataService, private router: Router) {
    this.tabStat = db.list('/Table Status');
    this.tabObservable = this.tabStat.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.servAl = db.list('/servAlert');
    this.salObservable = this.servAl.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  viewSched(){
    this.router.navigate(['/entree']);
  }
  ngOnInit() {
    }
  getSal(listPath): Observable<any[]> {
		return this.db.list(listPath).valueChanges();
  }
  removeSal(key){
    if(confirm("Clear this alert?")){
      this.servAl.remove(key);
    }
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
  tabClean(table, key, stat){
    this.tNum = table;
    this.status = "Table " + this.tNum + " is vacant and ready to be sat.";
    if(this.status != stat){
      this.tabStat.remove(key);
      let tab = new Table(this.status, this.tNum, String(Date()));
      this.db.list('/Table Status').push(tab);
      location.reload();
    }
  }
  tabLef(table, key, stat){
    this.tNum = table;
    this.status = "Table " + this.tNum + " is vacant but dirty.";
    if(this.status != stat){
      this.tabStat.remove(key);
      let tab = new Table(this.status, this.tNum, String(Date()));
      this.db.list('/Table Status').push(tab);
      location.reload();
    }
  }
  foDel(table, key, stat){
    this.tNum = table;
    this.status = "Table " + this.tNum + " is eating their meal.";
    if(this.status != stat){
      this.tabStat.remove(key);
      let tab = new Table(this.status, this.tNum, String(Date()));
      this.db.list('/Table Status').push(tab);
      location.reload();
    }
  }
}

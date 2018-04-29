import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servAl: AngularFireList<any[]>;
  isAlert: boolean = false;
  serverMess: string[] = [];
  interval: number;
  salObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private dServe: DataService, private router: Router) {
    this.servAl = db.list('/servAlert');
    this.salObservable = this.servAl.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
    //this.salObservable = this.getSal('/servAlert');
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
}

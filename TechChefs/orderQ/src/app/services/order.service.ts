import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase) { }

  getOrders(): Observable<any[]> {
    return this.db.list('/Orders').valueChanges();
  }

  getMenu(): Observable<any[]> {
    return this.db.list('/menu').valueChanges();
  }
}

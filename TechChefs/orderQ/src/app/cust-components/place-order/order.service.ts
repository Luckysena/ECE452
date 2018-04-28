import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  orderCollection: AngularFirestoreCollection<any>;
    order: Observable<any[]>;
    orderDoc: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) { 
    this.orderCollection = this.afs.collection('/Orders');
    this.order = this.orderCollection.snapshotChanges().map(changes => {
      return changes.map(a=> {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  addOrder(orderData){
    this.orderCollection.add(orderData);
  }

}

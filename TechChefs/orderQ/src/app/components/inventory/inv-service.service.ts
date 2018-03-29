import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
 export class InvServiceService  {
   invCollection: AngularFirestoreCollection<any>;
     inv: Observable<any[]>;
     invDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore) {
  this.invCollection = this.afs.collection('/Inventory');
  this.inv = this.invCollection.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      });
}
  addInv(invData) {
    // this.afs.collection('/Inventory').add(invData).then(() => {
    //   console.log('Done');
    // })
    this.invCollection.add(invData);
  }
  deleteInv( invData) {
    // this.afs.collection('/Inventory').doc('/${invData.id}').delete().then(() => {
    //   console.log('Done');
    // })
    this.invDoc = this.afs.doc(`/Inventory/${invData.id}`);
        this.invDoc.delete();
  }
  editInv(key,newText){
    this.invDoc = this.afs.doc(`/Inventory/${key.id}`);
  //  this.invDoc.update(newText);
    this.invDoc.update({ Quantity: newText });
  }
  getInv() {
    // return this.afs.collection('/Inventory').valueChanges();
    return this.inv;
  }
}

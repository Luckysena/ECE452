import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { employee } from './employee';
@Injectable()
export class EmployeeService{
  EmpCollection: AngularFirestoreCollection <any>;
  Emp: Observable<any[]>;
  empDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore){
  }

  addEmp(EmployeeData){
    this.afs.collection('/Employee').add(EmployeeData).then(()=>{
      console.log('Done');
    })
  }

  getEmp(){
    return this.afs.collection('/Employee', ref => ref.orderBy('Name')).valueChanges();
  }
}

//
// @Injectable()
// export class EmployeeService {
//   itemsCollection: AngularFirestoreCollection<employee>;
//   items: Observable<employee[]>;
//   itemDoc: AngularFirestoreDocument<employee>;
//
//   constructor(public afs: AngularFirestore) {
//     //this.items = this.afs.collection('items').valueChanges();
//     this.itemsCollection = this.afs.collection('/Employee', ref => ref.orderBy('Name','asc'));
//
//     this.items = this.itemsCollection.snapshotChanges().map(changes => {
//       return changes.map(a => {
//         const data = a.payload.doc.data() as employee;
//         data.id = a.payload.doc.id;
//         return data;
//       });
//     });
//   }
//
//   getItems(){
//     return this.items;
//   }
//
//   addItem(item: employee){
//     this.itemsCollection.add(item);
//   }
//
//   deleteItem(item: employee){
//     this.itemDoc = this.afs.doc(`/Employee/${item.id}`);
//     this.itemDoc.delete();
//   }
//
//   updateItem(item: emloyee){
//     this.itemDoc = this.afs.doc(`/Employee/${item.id}`);
//     this.itemDoc.update(item);
//   }
//
// }

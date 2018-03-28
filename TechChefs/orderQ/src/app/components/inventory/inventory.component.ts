import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { InvServiceService } from './inv-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  InvDetails = {
    Name: '',
    Quantity: '',
    min: '',
    id:'',
    Unit:'',
    PricePer:'',
  }

  displayedColumns = ['Name', 'Quantity', 'Unit','PricePer','delete','edit'];
  dataSource = new InvDataSource(this.inventory);

  constructor(private inventory: InvServiceService, private afs: AngularFirestore) {

  }

  addInv() {
    this.inventory.addInv(this.InvDetails);
  }

delete(item){
  this.inventory.deleteInv(item);
}
edit(key,newText){
  this.inventory.editInv(key,newText);
}
}

export class InvDataSource extends DataSource<any> {

  constructor(private inventory: InvServiceService) {
  super();
  }

  connect() {
    return this.inventory.getInv();
  }

  disconnect() {

  }
}
// export class InventoryComponent implements OnInit {
//   invObservable: Observable<any[]>;
//   constructor(private db: AngularFireDatabase) { }
//
//   ngOnInit() {
//     this.invObservable = this.getInv('/Inventory');
//   }
//   getInv(listPath): Observable<any[]> {
//     return this.db.list(listPath).valueChanges();
//   }
//
// }




//
// export class InventoryComponent {
//   invRef: AngularFireList<any>;
//   invObservable: Observable<any[]>;
//   constructor(db: AngularFireDatabase) {
//     this.invRef = db.list('/Inventory');
//     // Use snapshotChanges().map() to store the key
//     this.invObservable = this.invRef.snapshotChanges().map(changes => {
//       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
//     });
//   }
//   addItem(newName: string) {
//     this.invRef.push({ text: newName });
//   }
//   updateItem(key: string, newText: string) {
//     this.invRef.update(key, { Quantity: newText });
//   }
//   deleteItem(key: string) {
//     this.invRef.remove(key);
//   }
//   deleteEverything() {
//     this.invRef.remove();
//   }
// }

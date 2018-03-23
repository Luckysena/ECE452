import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  invObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.invObservable = this.getInv('/Inventory');
  }
  getInv(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}

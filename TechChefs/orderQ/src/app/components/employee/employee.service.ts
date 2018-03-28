import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService{
  EmpCollection: AngularFirestoreCollection <any>;
  Emp: Observable<any[]>;
  empDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore){
  }

  addEmp(EmployeeData){
    this.afs.collection('employee').add(EmployeeData).then(()=>{
      console.log('Done');
    })
  }

  getEmp(){
    return this.afs.collection('employee', ref => ref.orderBy('Name')).valueChanges();
  }
}

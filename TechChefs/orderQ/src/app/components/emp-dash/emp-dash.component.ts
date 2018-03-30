import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { InvServiceService } from '../inventory/inv-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import {DataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import{InventoryComponent} from '../inventory/inventory.component';
import{EmployeeComponent} from '../employee/employee.component';
import{InvDataSource} from '../inventory/inventory.component';
import{EmpDataSource} from '../employee/employee.component';
import 'rxjs/add/operator/map';
 import { EmployeeService } from '../employee/employee.service';



@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrls: ['./emp-dash.component.css']
})
export class EmpDashComponent  {

  InvDetails = {
    Name: '',
    Quantity: '',
    min: '',
    id:'',
    Unit:'',
    PricePer:'',
  }

  displayedColumns = ['Name', 'Quantity', 'Unit','PricePer'];
  dataSource = new InvDataSource(this.inventory);
  EmpDetails ={
    ID: '',
    Name: '',
    Wage: '',
    Position:''
  }
  displayEmp =['Name','Position','ID'];
  dataEmp = new EmpDataSource(this.employee);

  constructor(public inventory: InvServiceService, public employee: EmployeeService, private afs: AngularFirestore) {

  }

  addInv() {
    this.inventory.addInv(this.InvDetails);
  }


delete(item){
  var retVal = confirm("Do you want to continue ?");
             if( retVal == true ){
                  this.inventory.deleteInv(item);
                return true;
             }
             else{

                return false;
             }

}
edit(key,newText){
  this.inventory.editInv(key,newText);
}

}

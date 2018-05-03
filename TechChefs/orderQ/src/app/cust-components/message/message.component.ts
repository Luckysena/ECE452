// Created by customer team - Mykola, Margaret, Aviv

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Mess } from './message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  type = 'Customer';
  message;

  constructor(private db: AngularFireDatabase) { }


  leaveMessage():void{
    let messages = new Mess(this.type,this.message);
    this.db.list('/messages/table2').push(messages);
    this.message = "";
  }



  messagesObservable: Observable<any[]>
  getMessage(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }


  isCustomer(x: string) :boolean{
    console.log(x);
    if(x=='Customer'){
    return true;
    }
    else{
    return false;
    }
  }

  isKitchen(x: string) :boolean{
    console.log(x);
    if(x=='Kitchen'){
    return true;
    }
    else{
    return false;
    }
  }





  ngOnInit() : void{
    this.messagesObservable = this.getMessage('/messages/table2');
  }

}

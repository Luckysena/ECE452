import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }


  leaveMessage(message:string):void{
    console.log(message);
    this.db.list('/messages/table2').push(message);
  }

  messagesObservable: Observable<any[]>
  getMessage(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

  getSender(sender): boolean{

  }

  ngOnInit() : void{
    this.messagesObservable = this.getMessage('/messages/table2');
  }

}

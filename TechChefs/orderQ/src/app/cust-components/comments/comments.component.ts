import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  constructor(private db: AngularFireDatabase) { }

  leaveComment(comment: string): void {
    console.log(comment);
    this.db.list('/Comments').push(comment);
  }

  ngOnInit() {
  }


}

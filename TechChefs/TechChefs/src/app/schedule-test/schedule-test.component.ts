import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { colors } from './colours';

@Component({
  selector: 'app-schedule-test',
  templateUrl: './schedule-test.component.html',
  styleUrls: ['./schedule-test.component.css']
})
export class ScheduleTestComponent {
  view: string = 'month';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
      {
        title: 'Draggable event',
        color: colors.yellow,
        start: new Date(),
        draggable: true
      },
      {
        title: 'A non draggable event',
        color: colors.blue,
        start: new Date()
      }
    ];

    refresh: Subject<any> = new Subject();

    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.refresh.next();
    }

  /*constructor() { }

  ngOnInit() {
  }
*/
}

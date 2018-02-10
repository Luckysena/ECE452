import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {

  
  constructor() {
    
  }

  ngOnInit() {
  }

  employees = [
    { value: 'umama', viewValue: 'Umama Ahmed' },
    { value: 'michael', viewValue: 'Michael Thuman' },
    { value: 'khoa', viewValue: 'Khoa Le' },
    { value: 'mykola', viewValue: 'Mykola Gryshko' },
    { value: 'aviv', viewValue: 'Aviv Khavich' },
    { value: 'matt', viewValue: 'Matt Mann' },
    { value: 'alex', viewValue: 'Alex Riveron' },
    { value: 'jeremy', viewValue: 'Jeremey Kritz' },
    { value: 'margaret', viewValue: 'Margaret Kirollos'}
  ]


  schedule = [
    {
      "date": "02/25/2018",
      "employee": "Jeremy Kritz",
      "startTime": "08:00",
      "endTime": "16:00",
    },
    {
      "date": "02/25/2018",
      "employee": "Umama Ahmed",
      "startTime": "14:00",
      "endTime": "22:00",
    },
    {
      "date": "02/25/2018",
      "employee": "Aviv Khavich",
      "startTime": "08:00",
      "endTime": "16:00",
    },
    {
      "date": "02/26/2018",
      "employee": "Mykola Gryshko",
      "startTime": "12:00",
      "endTime": "20:00",
    },
  ]

  
}

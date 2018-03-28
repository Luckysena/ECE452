import {Injectable, Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataSource } from '@angular/cdk/collections';
import { EmployeeService } from './employee.service'
import * as $ from 'jquery';
import * as firebase from 'firebase';

@Component({
  selector:'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {

    EmpDetails ={
      ID: '',
      Name: '',
      Shift: '',
      Shift_L: '',
      Wage: ''
    }
    displayedColumns =['ID', 'Name','Shift_L','Wage'];
    DataSource = new EmpDataSource(this.employee);

    constructor(private employee: EmployeeService, private afs: AngularFirestore){

    }
    addEmp(){
      this.employee.addEmp(this.EmpDetails);
    }

}

export class EmpDataSource extends DataSource <any>{

  constructor (private employee: EmployeeService){
    super();
  }

  connect(){
    return this.employee.getEmp();
  }

  disconnect(){

  }
}

/*
//Old section
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.empObservable = this.getemp('/employee');
  }
  getemp(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}


var rootRef =  db.ref().child('employee');
$('#save_button').click(function(){
  rootRef.set({
    Name:$('#Name').val()
    });
});

$('#clear_button').click(function(){
  $('#Name').val('');
});
*/


/*
           +hhhho.                      `/yhhhy.
          sd////ohy-                  `ods+//:sm`
         .N++.`-/+ody.              `+ds+:.``+:do
         +m/:````-++sm+            -hh+/.````/:sd
         yho......./oody://++++//:/mso:......-++M`
         dyo...--.../o+yssssossssyyso:..---...o/M-
         myo..--::://o++//////++++++o+//::--..o/N-
         dyo..-/++++/////////////////+++oo/-..s+M-
         hhs-/++////////:::::///////////+++o/:ssM`
         om+++////:-----:::::::-.....:////+++ooym
        -hh+/////-`     `.:::-`       .////++++ym/
       +ds+/////: `:://`  `-`   -://.  :////++++sds`                       ``...``
      sdo////:::- :mosN/       `dssNy  .---::/++oohh.                 .:+ossooooosso/.`-.
     /Ns+/:.````   :o+:`        -oo:`        `.:+oymy              `:ss+-.`       `-/shdyo`
     :md+.                                      :ohNo             :ys-                .:`sh`
     `Ns/`             .-::::.                  .osN:            +h-         ```````     `ds:
     `ddy:`        `` -mmysddh    `            `:ydm-           oh.        `..........``  /sm:
      `-hh/`       --`.hmmdmd+`` `/           .+hm:.           :m.       `..--::::::---..```ho
        `+ds-`     `/:-:+syo:-.`:/.        `./sydho:..```     `d+        `.-:////////::--.``m+
          .sho.      .oo+os++s+-.        `-/ossooosyhhhhyyyssssN`       `.-:/++oosyso//:--./Ny`
            -ym+.     :o:-::/s`       `.:+++o++ooooooooooosssssh         .-:/+oshsooo+//:--:om`
             `No/-     :/+++/.      `-/+++++++++++oooooooooooooh.        `.-/+ohoo+++++/::-+m-
              hy::-                .////+++++++++++ooooooooooooss`        `.-:oho++++++/:/yh.
              sh:::`              -//////++++++++++++oooooooooooss.         `.-yo+++o//ohy:
              od:::.              :////////++++++++++++ooooooooooos+`         `.os++ohN+.
              od:::.              ./////////+++++++++++++++oooooooooso:+/.      -+ho++ds
              yh:::`               ./////////+++++++++++++++++++++++++oo+ss+/:--/h++++:m/
              dy::`                 .//////////+++++++++++++++++++++++++++++++++++++//:oh
              mo::                   -///////////+++++++++++++++++++++++++++++++++////:+d
              ds::.                  .//////////////+++++++++++++++++++++++++++///////:oh
              sd:::`                 .::////////////////++++++y+++++++++++++//////////-sy
              .N+:::`                -::::////////////////:--:so++++++////////////////.ys
               sd/::-                -:::::///+///////:-..:++//y//////////////////////`ho
               `mo:::`               .:::::::/o///:-.``-o+/::::++:///////////////////- ys
                /m/::`            `   ::::::::s..`` `:shm:::::::o/.:///////////////:-  +d
                 hy::.  ``        :   -:::::::s  `-oyo-`ds:::::::+/``-::////////::-`   .N-
                 -N+:.  `.:-.     /`  `::::::/y:oso:`   .ds:::::::/+:.```.......``      /d:
                  dh:.    `-:os+/://   ::::::/No-`       .sh+:::::::://:-`               -d/
                  +N/.     `.+N://hy   .:::::+N`           -sho:--------:/o+-`            :N`
                  `Ny.      `:N`  /m    :::::sm              .oho:--------dyoso/.`        `N:
                   ym`       :N`  -N`   .::::hy                .yh-------:N.  ./sy/        d/
                   :N.       :N   .N.    -::/m+                 yy----...sh      -N`       d/
                   `m/       /m   `N-     .-:N.                +m:......:m-      -N`       m/
                    h+       oh   `N-       +d                :m:.......hs       /m       `N-
                    yo       ys   .N.       do               /d/.......od`       ys       -N`
                    ho       d/   -N`      -N.              +d:......./m-       .N-       +d
                    d+      .N.   /d       sy             `sd-.......+d-        yy        d+
                   `N-      /m    ys      `N:             .hyyyyyyyssy.        :m.       :m`
                   /m`      ys   `m:      oh                                  .m:       `d+
                   odssoossyh-   -N.    `-m:                                  smoo+++ooshy
                      `.``       `+syyyys+:                                    `..---..`


*/

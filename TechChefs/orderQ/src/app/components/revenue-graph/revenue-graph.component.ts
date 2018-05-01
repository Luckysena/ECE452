import { Component, OnInit } from '@angular/core';
import { Chart, ChartData, Point } from 'chart.js';
import { OrderService } from '../../services/order.service'
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-revenue-graph',
  templateUrl: './revenue-graph.component.html',
  styleUrls: ['./revenue-graph.component.css'],
  providers: [OrderService]
})
export class RevenueGraphComponent implements OnInit {
  canvas: any;
  ctx: any;

  ordersObs: Observable<any[]>;
  menuObs: Observable<any[]>;
  dates: any[] = [];
  data: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.ordersObs = this.orderService.getOrders();
    this.menuObs = this.orderService.getMenu();
    this.initDates();
  }

  initDates(): void {
    this.menuObs.forEach(menu => {
      this.ordersObs.forEach(orders => {
        orders = orders.map(o => {
          o.date = moment.unix(o.timestamp / 1000).format("MMM Do YY");
          o.prices = o.items.map(item => {
            let menuItem = menu.find(m => item.name == m.Name);
            return menuItem.Price * item.quantity;
          });
          o.total = o.prices.reduce((a, b) => a+b);
          return o;
        });
        this.dates = orders.map(o => {
          return moment.unix(o.timestamp / 1000).format("MMM Do YY");
        });
        this.formatData(orders);
        this.initChart();
      });
    }); 
  }

  formatData(orders) {
    // uniqueify dates
    this.dates = Array.from(new Set(this.dates));

    // sort dates in ascending order
    this.dates = this.dates.sort((a, b) => {
      a = moment(a, 'MMM Do YY').toDate();
      b = moment(b, 'MMM Do YY').toDate();
      return a > b ? 1 : a < b ? -1 : 0;
    })

    this.data = this.dates.map(date => {
      let dateOrders = orders.filter(o => o.date == date);
      let total = dateOrders.reduce((a, b) => a + b.total, 0);
      return total;
    })
  }

  initChart() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [{
          label: 'revenue',
          data: this.data,
          backgroundColor: "rgba(153,255,51,0.4)"
        }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
  }

  ngAfterViewInit() {
    this.initDates()
  }
}

import { Item } from './item'
export class Order {
  items: Item[];
  table: number;
  guests: number;
  timestamp: string;

  constructor(items: Item[], table: number, guests: number, timestamp: string) {
    this.items = items;
    this.table = table;
    this.guests = guests;
    this.timestamp = timestamp;
  }
}

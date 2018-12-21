import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


export interface IOrder {
  id?: number;
  image?: string;
  description?: string;
  price?: number;
  quantity?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders: Array<IOrder> = [];
  constructor(private activatedRoute: ActivatedRoute) {
    this.orders = [{
      'id': 1,
      'image': '../../assets/bike1.jpeg',
      'description': 'Bike Model 1',
      'price': 5000,
      'quantity': 1
    },
    {
      'id': 2,
      'image': '../../assets/bike2.jpeg',
      'description': 'Bike Model 2',
      'price': 4000,
      'quantity': 2
    },
    {
      'id': 3,
      'image': '../../assets/bike3.jpeg',
      'description': 'Bike Model 3',
      'price': 3000,
      'quantity': 3
    }];
  }

  ngOnInit() {

  }

}

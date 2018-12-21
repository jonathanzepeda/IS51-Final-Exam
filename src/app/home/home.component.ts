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
  }

  ngOnInit() {

  }

}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<ProductModel>;

  constructor() {
    this.products = [
      { id: 1, name: 'Абрикос', capacity: 10 },
      { id: 2, name: 'Банан', description: 'Очень вкусный', capacity: 20  },
      { id: 3, name: 'Виноград', capacity: 30 },
      { id: 4, name: 'Грейпфрут', capacity: 40 },
      { id: 5, name: 'Дыня', capacity: 50 }
    ];
  }

  ngOnInit() {}



  ngOnDestroy(){
    console.log("test");
  }
}

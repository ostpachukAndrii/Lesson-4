import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [`p {text-align: center; color: green; font-size: 20px; font-family: "Arial"} h2 {text-align: center; text-transform: uppercase; }`],
  encapsulation:  ViewEncapsulation.None
})

export class ProductComponent implements OnInit {
@Input()
product: ProductModel;

@Output()
buy: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {}

  ngOnInit() {
  }

  onBuy(event: any)  {
    console.log(event); 
    this.buy.emit(this.product);
  }
}

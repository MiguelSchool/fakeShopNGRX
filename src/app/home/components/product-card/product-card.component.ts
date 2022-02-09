import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../shared/types/ProductInterface";

@Component({
  selector: 'main-method-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input('product')productProp: ProductInterface  |undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}

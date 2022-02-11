import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../shared/types/ProductInterface";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {Store} from "@ngrx/store";
import {singleProductAction} from "../../store/actions/singleProductActions";

@Component({
  selector: 'main-method-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input('product')productProp: ProductInterface  |undefined;
  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {

  }

  onDetails(): void {
    let id: number ;
    if(this.productProp){
      id = this.productProp.id;
      const fullUrl: string = `:${id}`
      this.router.navigate(['/product',id])
    }

  }
}

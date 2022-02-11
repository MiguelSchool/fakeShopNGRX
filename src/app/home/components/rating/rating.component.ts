import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../shared/types/ProductInterface";

@Component({
  selector: 'main-method-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less']
})
export class RatingComponent implements OnInit {

  @Input('product')productProps: ProductInterface | undefined;
  rating: number | undefined;
  counterRating: number | undefined;
  constructor() { }

  ngOnInit(): void {
    if(this.productProps){
      this.rating         = this.productProps.rating.rate;
      this.counterRating  = this.productProps.rating.count;
    }
  }
}

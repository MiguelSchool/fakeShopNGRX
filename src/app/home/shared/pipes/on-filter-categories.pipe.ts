import { Pipe, PipeTransform } from '@angular/core';
import {ProductInterface} from "../types/ProductInterface";
import {CategoryInterface} from "../types/CategoryInterface";

@Pipe({
  name: 'onFilterCategories'
})
export class OnFilterCategoriesPipe implements PipeTransform {

  transform(products: ProductInterface[], filterValue: CategoryInterface): ProductInterface[] {
    if(filterValue.categoryIdentifier=== ''){ return products; }
    return products.filter(
      product => product.category === filterValue);
  }

}

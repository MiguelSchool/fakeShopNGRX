import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {Observable} from "rxjs";
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {select, Store} from "@ngrx/store";
import {categorySelector, isLoadingSelector} from "../../store/selectors/categorySelectors";

import {ProductInterface} from "../../shared/types/ProductInterface";
import {getProductsSelector, productIsLoadingSelector} from "../../store/selectors/productSelectors";
import {GetProductsService} from "../../shared/services/get-products.service";


@Component({
  selector: 'main-method-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
  categories$: Observable<CategoryInterface[] | null> | undefined;
  isLoadingCategory$ : Observable<boolean> | undefined;
  isLoadingProducts$ : Observable<boolean> | undefined;
  products$  : Observable<ProductInterface[] | null>  | undefined;
  selectedCategoryToFilter: CategoryInterface = {categoryIdentifier: ''};
  constructor(private store: Store) {this.selectedCategoryToFilter = {categoryIdentifier: ''};}

  ngOnInit(): void {
    this.initializeValues();
    this.selectedCategoryToFilter = {categoryIdentifier: ''}

  }

  private initializeValues(): void {
    // @ts-ignore
    this.products$ = this.store.pipe(select(getProductsSelector))
    // @ts-ignore
    this.categories$ = this.store.pipe(select(categorySelector));
    // @ts-ignore
    this.isLoadingCategory$ = this.store.pipe(select(isLoadingSelector));
    // @ts-ignore
    this.isLoadingProducts$ = this.store.pipe(select(productIsLoadingSelector))
  }

  onFetch() {
    // @ts-ignore
    this.products$ = this.store.pipe(select(getProductsSelector))
  }
}

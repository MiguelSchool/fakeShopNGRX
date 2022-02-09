import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {select, Store} from "@ngrx/store";
import {categorySelector, isLoadingSelector} from "../../store/selectors/categorySelectors";
import {getCategoryAction} from "../../store/actions/categoryActions";
import {ProductStateInterface} from "../../shared/types/ProductStateInterface";
import {ProductInterface} from "../../shared/types/ProductInterface";
import {getProductsSelector} from "../../store/selectors/productSelectors";
import {GetProductsService} from "../../shared/services/get-products.service";
import {getProductAction} from "../../store/actions/productActions";

@Component({
  selector: 'main-method-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  categories$: Observable<CategoryInterface[] | null> | undefined;
  isLoading$ : Observable<boolean> | undefined;
  products$  : Observable<ProductInterface[] | null>  | undefined;

  mockproducts: Observable<ProductInterface[] | null> | undefined
  constructor(private store: Store, private mock: GetProductsService ) {
    this.mockproducts = this.mock.getProducts()
  }

  ngOnInit(): void {
    this.store.dispatch(getProductAction());
    this.store.dispatch(getCategoryAction());
    this.initializeValues();

  }

  private initializeValues(): void {
    // @ts-ignore
    this.products$ = this.store.pipe(select(getProductsSelector))
    // @ts-ignore
    this.categories$ = this.store.pipe(select(categorySelector));
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductInterface} from "../../shared/types/ProductInterface";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getSingleProductIsLoadingSelector, getSingleProductSelector} from "../../store/selectors/singleProductSelector";
import {singleProductAction} from "../../store/actions/singleProductActions";
import {isLoggedInSelector} from "../../../auth/store/selectors/authSelectors";

@Component({
  selector: 'main-method-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<ProductInterface | null > | undefined;
  isLoading$: Observable<boolean> | undefined;
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  private initializeValues(): void {
    // @ts-ignore
    this.isLoading$ = this.store.select(getSingleProductIsLoadingSelector)
    const idString= this.activatedRoute.snapshot.paramMap.get('id');

    if(idString) {
      const id = +idString
      this.store.dispatch(singleProductAction({id}))
    }

    // @ts-ignore
    this.product$ = this.store.pipe(select(getSingleProductSelector))
  }
  private initializeListeners(): void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.select(isLoggedInSelector)
  }
}

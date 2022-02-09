import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {select, Store} from "@ngrx/store";
import {categorySelector, isLoadingSelector} from "../../store/selectors/homeSelectors";
import {getCategoryAction} from "../../store/actions/categoryActions";

@Component({
  selector: 'main-method-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  categories$: Observable<CategoryInterface[] | null> | undefined;
  isLoading$:  Observable<boolean> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {

    // @ts-ignore
    this.categories$ = this.store.pipe(select(categorySelector));
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

}

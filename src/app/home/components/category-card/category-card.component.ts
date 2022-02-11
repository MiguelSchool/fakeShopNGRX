import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryInterface} from "../../shared/types/CategoryInterface";
import {Store} from "@ngrx/store";
import {filterProductsAction} from "../../store/actions/filterProductsActions";

@Component({
  selector: 'main-method-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.less']
})
export class CategoryCardComponent implements OnInit {

  @Input('category')categoryProp: CategoryInterface | undefined;
  @Output('pushFilteredValue') valueToFilter: EventEmitter<CategoryInterface>;

  constructor(private store: Store) {
    this.valueToFilter = new EventEmitter<CategoryInterface>()
  }

  ngOnInit(): void {
  }

  onFilter(category: CategoryInterface): void {
    this.store.dispatch(filterProductsAction({category}));
    this.valueToFilter.emit(category)
  }

}

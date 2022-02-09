import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UserInterface} from "../../../../types/UserInterface";
import {select, Store} from "@ngrx/store";
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from "../../../../../auth/store/selectors/authSelectors";
import {logoutAction} from "../../../../../auth/store/actions/logoutAction";

@Component({
  selector: 'main-method-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.less']
})
export class TopBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined;
  isAnonymous$: Observable<boolean> | undefined;
  currentUser$: Observable<UserInterface> | undefined;

  constructor( private store: Store ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues() : void {
    // @ts-ignore
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    // @ts-ignore
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    // @ts-ignore
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  onLogout(): void {
    this.store.dispatch(logoutAction())
  }
}

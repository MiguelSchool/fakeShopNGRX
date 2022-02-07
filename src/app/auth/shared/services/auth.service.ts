import { Injectable } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../../../shared/types/UserInterface";
import {environment} from "../../../../environments/environment";
import {LoginUserInterface} from "../types/loginUser";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClientModule) { }

  login(user: LoginUserInterface): Observable<string> {

  }

}


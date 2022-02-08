import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {LoginUserInterface} from "../types/loginUser";
import {UserInterface} from "../../../shared/types/UserInterface";
import {RegisterUserInterface} from "../types/RegisterUser";


@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: LoginUserInterface): Observable<string> {
    const fullUrl = `${environment.basicUrl}/auth/login`;
    return this.httpClient.post<string>(fullUrl,user);
  }

  getUser(username: string): Observable<UserInterface>{
    const fullUrl = `${environment.basicUrl}/users`;
    return this.httpClient.get<UserInterface[]>(fullUrl).pipe(
      map((users: UserInterface[]) => users.filter(
        user => user.username === username
      )[0])
    )
  }

  addUser(user: RegisterUserInterface): Observable<UserInterface> {
    const fullUrl = `${environment.basicUrl}/users`;
    return this.httpClient.post<UserInterface>(fullUrl, user);
  }
}


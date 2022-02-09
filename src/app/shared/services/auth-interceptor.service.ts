import { Injectable } from '@angular/core';
import {PersistenceService} from "./persistence.service";
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptorService {

  constructor(private persistenceService: PersistenceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });

    return next.handle(request);
  }
}

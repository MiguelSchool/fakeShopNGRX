import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../types/ProductInterface";
import {environment} from "../../../../environments/environment";

@Injectable()
export class GetProductsService {

  private apiUrl: string = 'products'
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    const fullUrl = `${environment.basicUrl}/${this.apiUrl}`;
    return this.httpClient.get<ProductInterface[]>(fullUrl)
  }
}

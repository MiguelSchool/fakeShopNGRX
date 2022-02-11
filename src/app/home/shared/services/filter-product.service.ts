import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../types/ProductInterface";
import {CategoryInterface} from "../types/CategoryInterface";
import {environment} from "../../../../environments/environment";

@Injectable()
export class FilterProductService {

  apiUrl = 'products/category'
  constructor(private httpClient: HttpClient) { }

  getFilterProducts(category: CategoryInterface): Observable<ProductInterface[]> {
    const fullUrl: string = `${environment.basicUrl}/${this.apiUrl}/${category}`
    return this.httpClient.get<ProductInterface[]>(fullUrl);
  }
}

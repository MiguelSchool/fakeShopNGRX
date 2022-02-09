import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryInterface} from "../types/CategoryInterface";
import {environment} from "../../../../environments/environment";

@Injectable()
export class GetCategoriesService {

  apiUrl = '/categories'
  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoryInterface[]> {
    const fullUrl = `${environment.basicUrl}/products/${this.apiUrl}`;
    return this.httpClient.get<CategoryInterface[]>(fullUrl);
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInterface} from "../types/ProductInterface";
import {environment} from "../../../../environments/environment";
import {CategoryInterface} from "../types/CategoryInterface";

@Injectable()
export class GetProductsService {

  private apiUrl: string = 'products';
  categoryReset = new EventEmitter<CategoryInterface>()
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    const fullUrl = `${environment.basicUrl}/${this.apiUrl}`;
    return this.httpClient.get<ProductInterface[]>(fullUrl);
  }

  getSingleProduct(id: number): Observable<ProductInterface> {
    const fullUrl = `${environment.basicUrl}/${this.apiUrl}/${id}`;
    return this.httpClient.get<ProductInterface>(fullUrl);
  }

  onResetFilter(): void {
    this.categoryReset.emit({categoryIdentifier: '' });
  }
}

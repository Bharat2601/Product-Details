import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductDataTypes } from '../product-data-types.model';

const baseURL = 'http://localhost:3000/comments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct(): Observable<ProductDataTypes>{ 
    return this.http.get<ProductDataTypes[]>(baseURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductDetails(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/comments?id='+id);
  }
}

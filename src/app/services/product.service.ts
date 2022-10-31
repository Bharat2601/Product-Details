import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductDataTypes } from '../product-data-types.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct(): Observable<ProductDataTypes>{ 
    return this.http.get<ProductDataTypes[]>('http://localhost:3000/comments')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductDetails(id:any): Observable<any>{
    return this.http.get('http://localhost:3000/comments?id='+id);
  }
  getLogin(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/signupUsers");
  }
  postUsers(data : any): Observable<any>{
    return this.http.post<any>("http://localhost:3000/signupUsers", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

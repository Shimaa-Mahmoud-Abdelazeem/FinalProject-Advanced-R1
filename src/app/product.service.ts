import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
// api products
  private apiUrl = 'https://fakestoreapi.com/products';
  // api products categories
  private apiUrl2 = 'https://fakestoreapi.com/products/categories';

  constructor(private http :HttpClient) { }
// get products
   getproduct():Observable< Products[]  >   {
    return this.http.get<Products[]>(this.apiUrl);
  }
// get products category
  getcategories():Observable< Products[]  >   {
    return this.http.get<Products[]>(this.apiUrl2);
  }
// get products by id
  getproductbyid(id:number):Observable<Products>{
return this.http.get<Products>('https://fakestoreapi.com/products/' + id.toString())
  }
// get products by category
  getproductbycategories(categ:string):Observable<Products>{
    return this.http.get<Products>('https://fakestoreapi.com/products/category/' + categ)
      }




}

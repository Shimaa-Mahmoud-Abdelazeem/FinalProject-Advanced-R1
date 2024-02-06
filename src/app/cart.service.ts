import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems:Products[]=[];
  private cartitemcounter =new BehaviorSubject<number>(0);
  cartcounternow = this.cartitemcounter.asObservable();

  private totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartamountnow = this.totalItems.asObservable();


  constructor() { }

  getcartitem():Products[]{
    return this.cartitems;
  }


  getcartitemamount(){
    return this.cartamountnow;
  }

// Add Item to Cart
  addtocart(product:Products){
    this.cartitems.push(product);
    this.cartitemcounter.next(this.cartitems.length);
  }

  addtocartamount(item:number){
    this.cartitems.push();
    this.totalItems.next(item);
  }
// Remove Item from Cart
  removecartitem (id:number){
    const index=this.cartitems.findIndex((item=>item.id===id));
   this.cartitems.splice(index,1);

   this.cartitemcounter.next(this.cartitems.length);
  }
}

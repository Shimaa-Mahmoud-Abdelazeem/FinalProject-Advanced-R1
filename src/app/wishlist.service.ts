import { Injectable } from '@angular/core';
import { Products } from './products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishitems:Products[]=[];
  private wishitemcounter =new BehaviorSubject<number>(0);
  wishcounternow = this.wishitemcounter.asObservable();
  constructor() { }

  getwishitem():Products[]{
    return this.wishitems;
  }
// Add Item to wishlist
  addtowishlist(product:Products){
    this.wishitems.push(product);
    this.wishitemcounter.next(this.wishitems.length);
  }
// Remove Item from wishlist
  removewishitem (id:number){
    const index=this.wishitems.findIndex((item=>item.id===id));
   this.wishitems.splice(index,1);

   this.wishitemcounter.next(this.wishitems.length);
  }
}

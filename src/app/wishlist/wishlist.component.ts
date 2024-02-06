import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  productswish!:Products[];

constructor(
  private wishservice:WishlistService,
){

}
  ngOnInit(): void {
    this.productswish =this.wishservice.getwishitem();
  }
  remove(id:number){

    this.wishservice.removewishitem(id);
  }
}

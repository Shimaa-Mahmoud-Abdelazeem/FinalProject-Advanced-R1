import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit{

  id!:number;
  products!:Products[];
  product!: Observable<Products>;


  amount:number=0;

  constructor(private route :ActivatedRoute,
    private prodservice:ProductService,
    private cartservice:CartService,
    private wishlistservice:WishlistService,){

  }
    ngOnInit(): void {
      this.id = Number(this.route.snapshot.params['id']);

    this.product =  this.prodservice.getproductbyid(this.id);
    this.prodservice.getproduct().subscribe((data :Products[])=> {this.products = data});

    this.cartservice.getcartitemamount().subscribe(value => { this.amount = value;})

    }
    // addtocartamount(product:Products,amount:number){
    //   this.cartservice.addtocartamount(product,amount);
    //   console.log(product,amount);


    // }
   //Add product to cart
addtocart(product:Products){
  this.cartservice.addtocart(product);
  this.cartservice.addtocartamount(this.amount);
      console.log(product,this.amount);
}
//Add product to wish list
addtowishlist(product:Products){
  this.wishlistservice.addtowishlist(product);
  console.log(product);
}
}

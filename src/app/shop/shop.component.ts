import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  products!:Products[];
  categories!:Products[];

constructor(private prodservice :ProductService,
  private cartservice:CartService,
  private wishlistservice:WishlistService,
  private route: ActivatedRoute){
}

ngOnInit(): void {
  // get all Prouduct
  this.prodservice.getproduct().subscribe((data :Products[])=> {this.products = data});
  //// get Prouduct categories
  this.prodservice.getcategories().subscribe((data2 :Products[])=> {this.categories = data2});
  // get Prouduct by filter categories
  this.route.params.subscribe((params: Params) => {
    console.log(params);
  this.filtercategories(params);
  });
}
//get filter value
filtercategories(event:any){
  let value=event.target.value;
  if (value=="All"){
    this.getallproduct();
  }else{
this.getproductcategories(value);}
}
// get all Prouduct fun
getallproduct(){
  this.prodservice.getproduct().subscribe((data :Products[])=> {this.products = data});
}
//// get Prouduct categories fun
getproductcategories(categ:string){
  this.prodservice.getproductbycategories(categ).subscribe((data3 :any)=> {this.products = data3});

}
//Add product to cart
addtocart(product:Products){
  this.cartservice.addtocart(product);
  console.log(product);
}
//Add product to wish list
addtowishlist(product:Products){
  this.wishlistservice.addtowishlist(product);
  console.log(product);
}
}

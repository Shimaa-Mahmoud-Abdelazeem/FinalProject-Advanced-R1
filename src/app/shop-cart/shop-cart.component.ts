import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{

  productscart!:Products[];
  productscartamount!:Observable<number>;

constructor(
  private carservice:CartService,
){

}
  ngOnInit(): void {
    this.productscart =this.carservice.getcartitem();
    this.productscartamount =this.carservice.getcartitemamount();
  }
  remove(id:number){

    this.carservice.removecartitem(id);
  }
}

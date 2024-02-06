import { filter } from 'rxjs/operators';

import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { WishlistService } from './wishlist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from './products';

// import { Observable, Subject, asapScheduler, pipe, of, from,
//   interval, merge, fromEvent } from 'rxjs';

//   import 'rxjs/operator/filter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FinalProj-ZayShopECommerce';
  userform! : FormGroup;
  cartitemcount!:number;
  wishitemcount!:number;

  //try to do Search box
  // products$!: Observable<Products[]>;
  // private searchTerms = new Subject<string>();


  // filteredProductsList!:Observable< Products[]>;
  // productsList!:Observable< Products[]>;



  constructor( private cartservice:CartService,private wishservice:WishlistService ,private formbuilder: FormBuilder,private prodservic:ProductService){
  }


// // Push a search term into the observable stream.
// search(term: string): void {
//   this.searchTerms.next(term);
// }

  ngOnInit(): void {
    this.cartservice.cartcounternow.subscribe( (count)=>{ this.cartitemcount = count});
    this.wishservice.wishcounternow.subscribe( (count)=>{ this.wishitemcount = count});
    // Subscribe Email
    this.userform =  this.formbuilder.group({
        email: ['', [Validators.email] ] ,});

         //try to do Search box
        // this.products$ = this.searchTerms.pipe(
        //   // wait 300ms after each keystroke before considering the term
        //   debounceTime(300),

        //   // ignore new term if same as previous term
        //   distinctUntilChanged(),

        //   // switch to new search observable each time the term changes
        //   switchMap((term: string) => this.prodservic.searchProducts(term)),
        // );


         //try to do Search box
  //       this.productsList = this.prodservic.getproduct();
  //   this.filteredProductsList = this.productsList;
  // }
  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredProductsList = this.productsList;
  //     return;
  //   }

  //   this.filteredProductsList = this.productsList.filter(
  //     (    product: { title: string; }) => product?.title.toLowerCase().includes(text.toLowerCase())
  //   );
   }
  subscribe(){
    console.log(this.userform.value);
  }


}

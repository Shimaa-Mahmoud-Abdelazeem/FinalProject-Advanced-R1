import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent},
  { path: 'Cart', component: ShopCartComponent},
  { path: 'WishList', component: WishlistComponent},
  { path: 'Shop', component: ShopComponent},
  { path: 'View/:id', component: ShopSingleComponent },
  // { path: 'Shop', component: ShopComponent,
  //     children: [
  //        { path: 'View/:id', component: ShopSingleComponent }
  //     ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

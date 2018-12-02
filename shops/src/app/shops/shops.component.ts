import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { ShopService } from './shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: Shop[] = [];
  shop: Shop = null;
  isLoadingResults = false;
  constructor(private shopService: ShopService) { }
  ngOnInit() {
    this.getAll();
  }
  getAll(): void {
    this.isLoadingResults = true;
      this.shopService.getAll()
    .subscribe(shops => {
      this.shops = shops;
      this.isLoadingResults = false;
    });
  }
  getById(id): void {

    this.isLoadingResults = true;
      this.shopService.getById(id)
    .subscribe(shop => {
      this.shop = shop;
      this.isLoadingResults = false;
    });
  }
  create(shopName): void {
    this.isLoadingResults = true;
      this.shopService.create({shop_name: shopName})
    .subscribe(response => {
      console.log('shop created', response);
      this.getAll();
      this.isLoadingResults = false;
    });
  }
  delete(shop): void {
    this.isLoadingResults = true;
      this.shopService.delete(shop)
    .subscribe(response => {
      console.log('shop deleted');
      this.getAll();
      this.isLoadingResults = false;
    });
  }
}

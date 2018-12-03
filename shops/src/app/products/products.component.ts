import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';
import { Product } from './product';
import {Shop} from './../shops/shop';
import {ShopService } from './../shops/shops.service';
import { ProductService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  product: Product = new Product('', '', '', '');
  isLoadingResults = false;
  shop: Shop = new Shop('', '', '');

  displayedColumns: string[] = ['id', 'category', 'product', 'discount', 'price', 'oprice'];
  dataSource = new MatTableDataSource();
  constructor(
    private productService: ProductService,
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef
    ) { }

  ngOnInit() {
    const shopId = +this.route.snapshot.paramMap.get('shopid');
    this.shopService.getById(shopId)
    .subscribe(shop => {
      this.shop = shop;
      this.getAll();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAll(): void {
    this.isLoadingResults = true;
      this.productService.getAll(this.shop.id)
    .subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
      this.dataSource.data.map(obj => (obj.oprice = (obj.price * 100 / (100 - obj.discount)).toFixed(0)));
      this.isLoadingResults = false;
    });
  }
  create(product): void {
    this.isLoadingResults = true;
      this.productService.create(this.shop.id, product)
    .subscribe(response => {
      console.log('product created', response);
      this.getAll();
      this.isLoadingResults = false;
    });
  }
  delete(product): void {
    this.isLoadingResults = true;
      this.productService.delete(this.shop.id, product)
    .subscribe(response => {
      console.log('product deleted');
      this.getAll();
      this.isLoadingResults = false;
    });
  }
}

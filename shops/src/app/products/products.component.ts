import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';
import { Product } from './product';
import { ProductService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  product: Product = null;
  isLoadingResults = false;

  displayedColumns: string[] = ['id', 'category', 'product', 'discount', 'price'];
  dataSource = new MatTableDataSource();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef
    ) { }

  ngOnInit() {
  //   this.products = this.route.paramMap.pipe(
  //   switchMap((params: ParamMap) =>
  //   this.productService.getAll(params.get('shopId'))
  // ));
  this.getAll(2);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAll(shopId): void {
    this.isLoadingResults = true;
      this.productService.getAll(shopId)
    .subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
      this.isLoadingResults = false;
    });
  }
  create(shopId, product): void {
    this.isLoadingResults = true;
      this.productService.create(shopId, product)
    .subscribe(response => {
      console.log('product created', response);
      this.getAll(shopId);
      this.isLoadingResults = false;
    });
  }
  delete(shopId, product): void {
    this.isLoadingResults = true;
      this.productService.delete(shopId, product)
    .subscribe(response => {
      console.log('product deleted');
      this.getAll(shopId);
      this.isLoadingResults = false;
    });
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatGridListModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDividerModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatListModule,
  MatSidenavModule,
  MatRadioModule,
  MatMenuModule,
  MatTooltipModule,
  MatDialogModule,
  MatDatepickerModule,
} from '@angular/material';
import { ShopService } from './shops/shops.service';
import { ProductService } from './products/products.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    // Angular Material components
    CdkTableModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  providers: [ShopService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

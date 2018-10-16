import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { DirModule } from '../common/dir/dir.module';

@NgModule({
  imports: [CommonModule, DirModule],
  declarations: [ProductListComponent, ProductComponent],
  exports: [ProductListComponent, DirModule]
})
export class ProductsModule {}

import { NgModule } from "@angular/core";

import { ProductsGridComponent } from "./products-grid.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductsGridComponent],
  exports: [ProductsGridComponent],
  providers: [],
})
export class ProductsModule {}

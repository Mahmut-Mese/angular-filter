import { NgModule } from "@angular/core";
import { ProductsGridComponent } from "./products-grid.component";
import { ProductsService } from "./products.service";
import { BrowserModule } from "@angular/platform-browser";
import { ListFilterPipe } from "../list-filter.pipe";

@NgModule({
  imports: [BrowserModule],
  declarations: [ProductsGridComponent, ListFilterPipe],
  exports: [ProductsGridComponent],
  providers: [ProductsService],
})
export class ProductsModule {}

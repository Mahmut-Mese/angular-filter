import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { ProductsService } from "./products/products.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

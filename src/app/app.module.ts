import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProductsModule } from "./products/products.module";
import { ProductsService } from "./products/products.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

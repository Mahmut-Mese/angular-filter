import { Component } from "@angular/core";
import { ProductsService } from "./products/products.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ir-dev-test";
  public products;
  public productsUniqueBrands;
  ngOnInit() {
    this.getAllTasks();
  }
  constructor(private productsService: ProductsService) {}
  getAllTasks() {
    this.productsService.getProducts().subscribe((items) => {
      this.products = items;
      this.productsUniqueBrands = this.products.filter(
        (p, i, arr) => arr.findIndex((t) => t.brand === p.brand) === i
      );
    });
  }
}

import { Component, Input, OnInit } from "@angular/core";

import { ProductsService } from "./products.service";
@Component({
  selector: "products-table",
  templateUrl: "products-grid.component.html",
  styleUrls: [],
  providers: [],
})
export class ProductsGridComponent implements OnInit {
  @Input() products: [];
  @Input() searchModel;
  @Input() brandModel;
  @Input() stockModel;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}
}

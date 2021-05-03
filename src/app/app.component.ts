import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ProductsService } from "./products/products.service";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ProductsService],
})
export class AppComponent implements OnInit {
  @ViewChild("SearchInput", { static: true }) SearchInput: ElementRef;

  title = "ir-dev-test";
  public products;
  public productsUniqueBrands;
  public searchModel;
  public brandModel = "all";
  public stockModel = "all";
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  @Output() brandModelChange: EventEmitter<any> = new EventEmitter();
  @Output() stockModelChange: EventEmitter<any> = new EventEmitter();

  updateBrandModel(value) {
    this.brandModel = value;
    this.brandModelChange.emit(this.brandModel);
  }
  updateStockModel(value) {
    this.stockModel = value;
    this.stockModelChange.emit(this.stockModel);
  }

  ngOnInit() {
    this.getAllTasks();
    fromEvent(this.SearchInput.nativeElement, "keyup")
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.searchModel = text;
        this.searchModelChange.emit(this.searchModel);
      });
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

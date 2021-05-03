import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "listFilter",
})
export class ListFilterPipe implements PipeTransform {
  transform(
    list: any[],
    filterText: string,
    filterText2: string,
    filterText3: string
  ): any {
    return list
      ? list
          .filter((item) => {
            if (filterText?.length < 3) {
              filterText = "";
            }
            return (
              item.name.search(new RegExp(filterText, "i")) > -1 ||
              item.description.search(new RegExp(filterText, "i")) > -1 ||
              item.brand.search(new RegExp(filterText, "i")) > -1
            );
          })
          .filter((item) => {
            if (filterText2 == "all") {
              return item.brand != "";
            } else {
              return item.brand == filterText2;
            }
          })
          .filter((item) => {
            if (filterText3 == "out-of-stock") {
              return item.quantity == 0;
            }
            if (filterText3 == "in-stock") {
              return item.quantity > 0;
            } else {
              return item.quantity > -1;
            }
          })
      : [];
  }
}

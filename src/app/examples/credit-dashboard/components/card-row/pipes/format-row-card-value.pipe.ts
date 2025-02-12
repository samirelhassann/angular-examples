import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatRowCardValue",
  standalone: false,
})
export class FormatRowCardValuePipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value === "string") {
      return value;
    }

    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
}

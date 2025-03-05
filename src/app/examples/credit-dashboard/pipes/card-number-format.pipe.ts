import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardNumberFormat",
  standalone: false,
})
export class CardNumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/(\d{4})/g, "$1 ");
  }
}

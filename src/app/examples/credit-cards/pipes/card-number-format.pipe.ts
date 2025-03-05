import { Pipe, PipeTransform } from "@angular/core";

/**
 * Pipe to format a card number.
 *
 * @example
 * {{ cardNumber | cardNumberFormat }}
 */
@Pipe({
  name: "cardNumberFormat",
  standalone: false,
})
export class CardNumberFormatPipe implements PipeTransform {
  /**
   * Transforms a Date object into a formatted string.
   *
   * @param value - card number.
   *
   * @returns The formatted card number.
   */
  transform(value: number): string {
    return value.toString().replace(/(\d{4})(?=\d)/g, "$1 ");
  }
}

import { Pipe, PipeTransform } from "@angular/core";

import { Address } from "../domains/address";

@Pipe({
  name: "addressFormat",
  standalone: false,
})
export class AddressFormatPipe implements PipeTransform {
  transform(address: Address): string {
    return `${address.addressLine}${address.addressLine2 ? `, ${address.addressLine2}` : ""}, ${address.city}, ${address.state} ${address.zipcode}`;
  }
}

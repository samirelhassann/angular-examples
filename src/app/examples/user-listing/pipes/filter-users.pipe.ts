/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from "@angular/core";

import { User } from "../domains/user";

@Pipe({
  name: "filterUsers",
  standalone: false,
})
export class FilterUsersPipe implements PipeTransform {
  transform(list: User[], searchValue: string): User[] {
    if (!searchValue || searchValue === "") {
      return list;
    }

    return list.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }
}

import { Injectable } from "@angular/core";

import { User } from "@/examples/user-listing/domains/user";
import {
  GetUserResponseModel,
  GetUsersResponseModel,
} from "@/examples/user-listing/services/user/dto/get-users.dto";

// eslint-disable-next-line import/no-cycle

@Injectable({
  providedIn: "root",
})
export class GetUsersMapper {
  toDomain(serviceResponse: GetUsersResponseModel): User[] {
    return serviceResponse.map(
      (userResponse: GetUserResponseModel) =>
        <User>{
          ...userResponse,
        },
    );
  }
}

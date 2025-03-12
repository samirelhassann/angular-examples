import { Injectable } from "@angular/core";

import makeUserList from "../../mocks/api/make-user-list-response.mock";
import { GetUsersResponseModel } from "./dto/get-users.dto";

@Injectable({
  providedIn: "root",
})
export class UserService {
  async getUsers(): Promise<GetUsersResponseModel> {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return Promise.resolve(makeUserList());
  }
}

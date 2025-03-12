import { Injectable } from "@angular/core";

import { from, map, Observable } from "rxjs";

import { User } from "../../domains/user";
import { UserService } from "../../services/user/user.service";
import { GetUsersMapper } from "./mappers/get-users.mapper";

@Injectable()
export class GetUsersUseCase {
  constructor(
    private usersService: UserService,
    private getUsersMapper: GetUsersMapper,
  ) {}

  execute(): Observable<User[]> {
    const request = from(this.usersService.getUsers());

    return request.pipe(
      map((response) => this.getUsersMapper.toDomain(response)),
    );
  }
}

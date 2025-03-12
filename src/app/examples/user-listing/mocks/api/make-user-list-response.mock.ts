import { faker } from "@faker-js/faker";

import {
  GetUserResponseModel,
  GetUsersResponseModel,
} from "../../services/user/dto/get-users.dto";

export default function makeUserList(): GetUsersResponseModel {
  return Array.from(
    { length: 100 },
    () =>
      <GetUserResponseModel>{
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        address: {
          addressLine: faker.location.streetAddress(),
          addressLine2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipcode: faker.location.zipCode(),
        },
        enabled: faker.datatype.boolean(),
        phone: faker.phone.number(),
        role: faker.helpers.arrayElement(["Admin", "User"]),
        createdDate: faker.date.recent(),
      },
  );
}

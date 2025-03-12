export interface GetUserResponseModel {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  enabled: boolean;
  role: string;
  createdDate: Date;
}

interface Address {
  addressLine: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
}

export type GetUsersResponseModel = GetUserResponseModel[];

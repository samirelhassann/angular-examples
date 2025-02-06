import { Address } from "./Address";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  enabled: boolean;
  role: string;
  createdDate: Date;
}

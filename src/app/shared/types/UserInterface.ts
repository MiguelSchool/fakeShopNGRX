export interface UserInterface {
  id: number;
  email: string;
  username: string;
  password: string;
  name: NameInterface;
  address: AddressInterface;
  phone: string;
}

interface NameInterface {
  firstname: string;
  lastname: string;
}

interface AddressInterface {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: GeoMapInterface
}

interface GeoMapInterface {
  lat: string;
  long: string;
}

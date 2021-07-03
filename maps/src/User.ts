import faker from 'faker';
import { Marker } from './CustomMap'; 

export class User implements Marker{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User name is ${this.name}`
  }
}
import { faker } from '@faker-js/faker';

interface Car {
  type: string;
  brand: string;
  model: string;
  color: string;
}

export const carsArray: Car[] = [];

for (let i = 0; i < 1000000; i++) { // Adjust loop count for desired RAM usage
  carsArray.push({
    type: 'car',
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    color: faker.vehicle.color(),
  });
}

export const DUMMY2 = 2;

import { faker, SexType } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

export type Person = {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  age: number;
  sex: SexType;
  status: 'relationship' | 'complicated' | 'single';
  subRows?: Person[];
  subscriptionTier: SubscriptionTier;
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    _id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(40),
    sex: faker.name.sexType(),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return new Promise((resolve) => {
    resolve(makeDataLevel());
  });
}

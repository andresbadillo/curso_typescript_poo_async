import { Dog } from './09-protected'

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: number | string) {
//   return value;
// }

function getValue<myType>(value: myType) {
  const array: myType[]= [];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1, 2, 3]).push(4);

const sunny = new Dog('Sunny', 'Sarah');
getValue<Dog>(sunny).greeting();

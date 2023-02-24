export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`${this.name}: woof`);
    }
    this.doSomething();
  }

  move(){
    console.log('Moving as a dog');
    super.move();
  }
}

const alvin = new Dog('Alvin', 'Andres');
alvin.woof(3);
alvin.owner = 'Sarah';
// alvin.doSomething();
// console.log(`${alvin.name}'s Owner: ${alvin.owner}`);
alvin.move();

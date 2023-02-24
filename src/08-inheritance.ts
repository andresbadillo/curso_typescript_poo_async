export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
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
  }
}

const sunny = new Animal('Sunny');
sunny.move();
console.log(sunny.greeting());

const albin = new Dog('Albin', 'Andres');
albin.move();
console.log(albin.greeting());
albin.woof(3);
console.log(`${albin.name}'s Owner: ${albin.owner}`);

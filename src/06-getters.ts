export class MyDate {

  constructor(
    public year:number = 1990,
    public month: number = 1,
    private _day: number = 1,
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this.addPadding(this._day); // un getter debe retornar algo
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1984, 2, 19);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
// myDate.day = 12; // No se puede modificar, solo se puede acceder
console.log('day:', myDate.day);
;
console.log('isLeapYear:', myDate.isLeapYear);
; // No se ejecuta, se llama como una propiedad mas

export class MyDate {

  constructor(
    public year:number = 1990,
    private _month: number = 1,
    private _day: number = 1,
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // code
    return this._day; // un getter debe retornar algo
  }

  get month() {
    // code
    return this._month; // un getter debe retornar algo
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }


  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }

}

const myDate = new MyDate(1984, 2, 19);
console.log(myDate.printFormat());
myDate.month = 12;
console.log(myDate.month);
console.log(myDate.printFormat());

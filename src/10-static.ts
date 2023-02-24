console.log(Math.PI);
console.log(Math.max(5,8,1,3,7,11,9));

class myMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) =>
      (max >= item) ? max : item,
      numbers.length == 0 ? 'Ingresa al menos un número' : -Infinity
    );
  }
}

// const math = new myMath();
// math.PI;

console.log('myMath.PI', myMath.PI);
const numbers = [5, 35, 9, 2, 12, 21];
console.log('myMath.max', myMath.max(-4, -8, -1, -15));

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect():void;
  isConnected(name: string): boolean;
}

/* Todo en las interfaces es público */

// const driver1: Driver = {
//   database: '',
//   password: '',
//   port: 8001,

//   connect(): void {
//     // code
//   }
// }

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: string,
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }
}

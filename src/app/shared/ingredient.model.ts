export class Ingredient {


  constructor(private name: string, private amount: number) {
  }

  getName() : string {
    return this.name;
  }

  getAmount() : number{
    return this.amount;
  }
}
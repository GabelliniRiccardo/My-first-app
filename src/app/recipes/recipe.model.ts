import {Ingredient} from '../shared/ingredient.model';

export class Recipe {

  constructor(
    private name: string,
    private description: string,
    private imagePath: string,
    private ingredients : Ingredient[]){

  }

  getName() : string{
    return this.name
  }

  getDescription() : string{
    return this.description
  }

  getImagePath() : string{
    return this.imagePath
  }

  getIngredients() : Ingredient[]{
    return this.ingredients;
  }

}
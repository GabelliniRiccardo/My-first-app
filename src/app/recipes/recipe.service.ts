import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService : ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'This is the recipe n° 1',
      'https://i.vimeocdn.com/portrait/9557272_300x300.webp',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]
    ),


    new Recipe(
      'Recipe 2',
      'This is the recipe n° 2',
      'https://upload.wikimedia.org/wikipedia/it/5/51/Immagine_13.png',
      [
        new Ingredient('Potatoes', 53),
        new Ingredient('Tomatoes', 8)]
    ),

    new Recipe(
      'Recipe 3',
      'This is the recipe n° 3',
      'http://www.immaginipertutti.com/pic/minions/immagine-minions-1.jpg',
      [
        new Ingredient('Fish', 14),
        new Ingredient('Fries', 24)
      ]
    ),

    new Recipe(
      'Recipe 4',
      'This is the recipe n° 4',
      'https://i.vimeocdn.com/portrait/9557272_300x300.webp',
      [
        new Ingredient('Meat', 4),
        new Ingredient('Salt', 40)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
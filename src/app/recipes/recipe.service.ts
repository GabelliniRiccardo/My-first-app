import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

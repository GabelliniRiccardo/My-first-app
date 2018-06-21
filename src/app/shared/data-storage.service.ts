import { Injectable } from '@angular/core';
import {Http,  Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx'


@Injectable()

export class DataStorageService {

  link : string = 'https://recipes-project-e3aac.firebaseio.com/';

  constructor(private httpService : Http,
              private recipeService : RecipeService) { }

   storeRecipes(){
    return this.httpService.put(this.link+'/recipes.json', this.recipeService.getRecipes())

   }

   getRecipes(){
    return this.httpService.get(this.link+'recipes.json')
      .map(
        (response : Response) => {
          const recipes : Recipe[]  = response.json();
          for (let recipe of recipes){
            if (!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes : Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
   }

}

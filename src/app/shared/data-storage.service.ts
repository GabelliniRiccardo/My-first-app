// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';
//
// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
// import { AuthService } from '../auth/auth.service';
//
// @Injectable()
// export class DataStorageService {
//   constructor(private http: Http,
//               private recipeService: RecipeService,
//               private authService: AuthService) {
//   }
//
//   storeRecipes() {
//     const token = this.authService.getToken();
//
//     return this.http.put('https://recipes-project-e3aac.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
//   }
//
//   getRecipes() {
//     const token = this.authService.getToken();
//
//     this.http.get('https://recipes-project-e3aac.firebaseio.com/recipes.json?auth=' + token)
//       .map(
//         (response: Response) => {
//           const recipes: Recipe[] = response.json();
//           for (let recipe of recipes) {
//             if (!recipe['ingredients']) {
//               recipe['ingredients'] = [];
//             }
//           }
//           return recipes;
//         }
//       )
//       .subscribe(
//         (recipes: Recipe[]) => {
//           this.recipeService.setRecipes(recipes);
//         }
//       );
//   }
// }

import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put('https://recipes-project-e3aac.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      params : new HttpParams().set('auth', token),
    });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://recipes-project-e3aac.firebaseio.com/recipes.json',
      {
        params : new HttpParams().set('auth', token),
      })
      .map(
        (recipes) => {
          console.log(recipes)
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}

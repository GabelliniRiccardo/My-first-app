import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;

  constructor(private recipeService : RecipeService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.params
      .subscribe(
        (param : Params) => {
          this.id = param['id'];
          this.recipe = this.recipeService.getRecipeFromID(this.id);
        }
      );

  }

  onAddToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipe.getIngredients());

  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
    // this.router.navigate(['../', this .id,'edit'], {relativeTo : this.route});
  }

}

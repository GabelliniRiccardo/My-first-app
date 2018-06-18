import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipe.getIngredients());

  }

}

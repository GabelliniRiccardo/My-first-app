import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [new Recipe('Recipe 1', 'This is the recipe n° 1', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp'),
    new Recipe('Recipe 2', 'This is the recipe n° 2', 'https://upload.wikimedia.org/wikipedia/it/5/51/Immagine_13.png'),
    new Recipe('Recipe 3', 'This is the recipe n° 3', 'http://www.immaginipertutti.com/pic/minions/immagine-minions-1.jpg'),
    new Recipe('Recipe 4', 'This is the recipe n° 4', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp')];


  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

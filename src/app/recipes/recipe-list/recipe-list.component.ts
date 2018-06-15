import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [new Recipe('Recipe 1', 'This is the recipe n° 1', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp'),
    new Recipe('Recipe 2', 'This is the recipe n° 2', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp'),
    new Recipe('Recipe 3', 'This is the recipe n° 3', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp'),
    new Recipe('Recipe 4', 'This is the recipe n° 4', 'https://i.vimeocdn.com/portrait/9557272_300x300.webp')];

  constructor() { }

  ngOnInit() {
  }

}

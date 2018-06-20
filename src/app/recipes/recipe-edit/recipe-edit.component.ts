import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {


  id: number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route: ActivatedRoute, private recipesService: RecipeService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );

  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  private initForm(){

    let recipeName : string = '';
    let recipeImagePath : string = '';
    let recipeDescription : string = '';

    let recipeIngredients = new FormArray([]); // -->


    let ingredients : Ingredient [] = [];

    if (this.editMode){
      const recipe : Recipe = this.recipesService.getRecipeFromID(this.id);
      recipeName = recipe.getName();
      recipeImagePath = recipe.getImagePath();
      recipeDescription = recipe.getDescription();

      if(recipe.getIngredients()){
        for( let ingredient of recipe.getIngredients()){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.getName()),
              'amount' : new FormControl(ingredient.getAmount())
            })
          )
        }

      }

    }


    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription),
      'ingredients' : recipeIngredients

    })


    ingredients.forEach((ingr : Ingredient) => {
      recipeIngredients.push(new FormControl(ingr.getName()));
    });
  }

  getControlsOfIngredients(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}

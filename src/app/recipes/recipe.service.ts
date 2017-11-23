import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged: Subject<Recipe[]>;
  private _recipes: Recipe[];

  constructor() {
    this._recipes = [
      new Recipe(
        'Test ricetta 1',
        'Test descr ricetta 1',
        'http://pinkitalia.it/wp-content/uploads/2015/05/La-ricetta-del-risotto-al-limone3.jpg',
        [
          new Ingredient('Riso', 45),
          new Ingredient('Limoni', 23)
        ]),
      new Recipe(
        'Test ricetta 2',
        'Test descr ricetta 2',
        'http://www.ilgiornaledelcibo.it/wp-content/uploads/2009/09/risotto-agli-asparagi.jpg',
        [
          new Ingredient('Riso', 1),
          new Ingredient('Asparagi', 1)
        ])
    ];
    this.recipeChanged = new Subject<Recipe[]>();
  }

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this._recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this._recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes);
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService {
  public recipeSelected: EventEmitter<Recipe>;
  private _recipes: Recipe[];

  constructor() {
    this._recipes = [
      new Recipe('Test ricetta 1', 'Test descr ricetta 1',
        'http://pinkitalia.it/wp-content/uploads/2015/05/La-ricetta-del-risotto-al-limone3.jpg'),
      new Recipe('Test ricetta 2', 'Test descr ricetta 2',
        'http://www.ilgiornaledelcibo.it/wp-content/uploads/2009/09/risotto-agli-asparagi.jpg')
    ];
    this.recipeSelected = new EventEmitter();
  }

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }
}

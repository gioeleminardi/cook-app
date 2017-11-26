import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  public ingredientsChanged: Subject<Ingredient[]>;
  public startedEditing: Subject<number>;
  private _ingredients: Ingredient[];

  constructor() {
    this._ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];
    this.ingredientsChanged = new Subject<Ingredient[]>();
    this.startedEditing = new Subject<number>();
  }

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  public addAllIngredient(ingredients: Ingredient[]): void {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  public updateIngredient(index: number, newIngredient: Ingredient): void {
    this._ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this._ingredients.slice());
  }

  public deleteIngredient(index: number): void {
    this._ingredients.splice(index, 1);
    this.ingredientsChanged.next(this._ingredients.slice());
  }

}

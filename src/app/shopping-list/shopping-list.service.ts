import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  public ingredientsChanged: EventEmitter<Ingredient[]>;
  private _ingredients: Ingredient[];

  constructor() {
    this._ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];
    this.ingredientsChanged = new EventEmitter();
  }

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient): void {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

}

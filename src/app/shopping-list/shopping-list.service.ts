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

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient): void {
    this._ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  public addAllIngredient(ingredients: Ingredient[]): void {
    this._ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

}

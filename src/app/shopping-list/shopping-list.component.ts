import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingListServiceSubscription: Subscription;

  constructor(private _shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this._shoppingListService.ingredients;
    this.shoppingListServiceSubscription = this._shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this._shoppingListService.startedEditing.next(index);
  }


  ngOnDestroy(): void {
    this.shoppingListServiceSubscription.unsubscribe();
  }
}

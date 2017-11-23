import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private editMode = false;
  private editedItemIndex: number;

  constructor(private _shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this._shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this._shoppingListService.addIngredient(newIngredient);
  }

}

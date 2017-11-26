import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Store} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private _recipeService: RecipeService,
              private _router: Router,
              private _activeRoute: ActivatedRoute,
              private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) {
  }

  ngOnInit() {
    this._activeRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this._recipeService.getRecipe(this.id);
        }
      );
  }

  onSendToShoppingListSelected() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this._router.navigate(['edit'], {relativeTo: this._activeRoute});
  }

  onDeleteRecipe() {
    this._recipeService.deleteRecipe(this.id);
    this._router.navigate(['../'], {relativeTo: this._activeRoute});
  }

}

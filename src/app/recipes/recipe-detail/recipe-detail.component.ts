import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private _shoppingListService: ShoppingListService,
              private _recipeService: RecipeService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this._recipeService.getRecipe(this.id);
        }
      );
  }

  onSendToShoppingListSelected() {
    this._shoppingListService.addAllIngredient(this.recipe.ingredients);
  }

}

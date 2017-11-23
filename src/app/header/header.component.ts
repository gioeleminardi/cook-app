import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _firebaseService: FirebaseService, private _recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onSaveData() {
    const recipes = this._recipeService.recipes;
    this._firebaseService.saveData(recipes)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onLoadData() {
    this._firebaseService.loadData()
      .subscribe(
        (recipes: Recipe[]) => {
          this._recipeService.loadRecipes(recipes);
        }
      );
  }

}

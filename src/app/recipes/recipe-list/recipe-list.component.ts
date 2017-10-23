import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private _router: Router,
              private _activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  onNewRecipe() {
    this._router.navigate(['new'], {relativeTo: this._activeRoute});
  }
}

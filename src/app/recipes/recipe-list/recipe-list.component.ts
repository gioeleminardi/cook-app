import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Test ricetta 1', 'Test descr ricetta 1',
        'http://pinkitalia.it/wp-content/uploads/2015/05/La-ricetta-del-risotto-al-limone3.jpg'),
      new Recipe('Test ricetta 2', 'Test descr ricetta 2',
        'http://www.ilgiornaledelcibo.it/wp-content/uploads/2009/09/risotto-agli-asparagi.jpg')
    ];
  }

  ngOnInit() {
  }

}

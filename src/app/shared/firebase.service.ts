import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  constructor(private _http: Http) {
  }

  saveData(recipes: Recipe[]) {
    return this._http.put('https://varkrid-recipe-book.firebaseio.com/recipes.json', recipes);
  }

  loadData() {
    return this._http.get('https://varkrid-recipe-book.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      );
  }

}

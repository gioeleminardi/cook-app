import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class FirebaseService {

  constructor(private _http: Http, private _authService: AuthService) {
  }

  saveData(recipes: Recipe[]) {
    const token = this._authService.getToken();
    return this._http.put('https://varkrid-recipe-book.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

  loadData() {
    const token = this._authService.getToken();
    return this._http.get('https://varkrid-recipe-book.firebaseio.com/recipes.json?auth=' + token)
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

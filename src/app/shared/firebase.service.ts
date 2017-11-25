import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FirebaseService {

  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
  }

  saveData(recipes: Recipe[]) {
    const token = this._authService.getToken();
    return this._httpClient.put('https://varkrid-recipe-book.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

  loadData() {
    const token = this._authService.getToken();
    return this._httpClient.get<Recipe[]>('https://varkrid-recipe-book.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
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

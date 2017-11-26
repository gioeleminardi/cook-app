import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class FirebaseService {

  constructor(private _httpClient: HttpClient, private _authService: AuthService) {
  }

  saveData(recipes: Recipe[]) {
    const token = this._authService.getToken();
    // const params = new HttpParams().set('auth', token);
    // return this._httpClient.put('https://varkrid-recipe-book.firebaseio.com/recipes.json', recipes, {
    //   params: params
    // });
    const req = new HttpRequest('PUT', 'https://varkrid-recipe-book.firebaseio.com/recipes.json', recipes, {
      reportProgress: true,
      // params: params
    });
    return this._httpClient.request(req);
  }

  loadData() {
    const token = this._authService.getToken();
    // const params = new HttpParams().set('auth', token);
    return this._httpClient.get<Recipe[]>('https://varkrid-recipe-book.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
      // params: params
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

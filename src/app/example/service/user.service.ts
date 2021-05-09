import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, first, map, mergeMap, single } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get<Array<User>>(this._jsonURL + '/database.json');
  }

  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(this._jsonURL + '/database.json')
      .pipe(
        map(result => {
          let users: Array<User> = result['users'];

          let selectedUser: User;
          users.forEach(user => {
            if (user.id == userId)  {
              selectedUser = user;
            }
          })
          return selectedUser;
        })
      );
  }
}

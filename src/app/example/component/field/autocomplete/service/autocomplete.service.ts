import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DropdownOption } from 'ngx-material-widget';
 
@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Array<DropdownOption>> {
    return this.http.get<Array<DropdownOption>>(this._jsonURL + '/example/component/autocomplete/options.data.json');
  }
}

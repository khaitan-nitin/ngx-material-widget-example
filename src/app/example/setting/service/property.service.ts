import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyCategory, Property } from '../model/property.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getCategorizedProperties(): Observable<Array<PropertyCategory>> {
    return this.http.get<Array<PropertyCategory>>(this._jsonURL + '/setting/property/list.data.json');
  }

  public getAllProperties(): Observable<Array<Property>> {
    return this.http.get<Array<Property>>(this._jsonURL + '/setting/property/bootstrap-list.data.json');
  }

  public setPropertiesToLocalStore(): void {
    this.getAllProperties().subscribe(propertyList => {
      let propertyMap: Map<string, Property> = new Map<string, Property>();

      for (let property of propertyList) {
        propertyMap[property.key] = property;
      }

      localStorage.setItem("properties", JSON.stringify(propertyMap));
    });
  }
}

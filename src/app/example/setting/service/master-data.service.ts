import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterData, MasterDataCategory } from '../model/master-data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
}) 
export class MasterDataService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getCategorizedMasterData(): Observable<Array<MasterDataCategory>> {
    return this.http.get<Array<MasterDataCategory>>(this._jsonURL + '/setting/master-data/list.data.json');
  }

  public getAllMasterData(): Observable<Array<MasterData>> {
    return this.http.get<Array<MasterData>>(this._jsonURL + '/setting/master-data/bootstrap-list.data.json');
  }

  public setMasterDataToLocalStore(): void {
    this.getAllMasterData().subscribe(masterDataList => {
      let masterDataMap: Map<string, MasterData> = new Map<string, MasterData>();

      for (let masterData of masterDataList)  {
        masterDataMap[masterData.type] = masterData;
      }

      localStorage.setItem("masterData", JSON.stringify(masterDataMap));
    });
  }
}

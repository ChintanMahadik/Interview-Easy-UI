import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Module } from './Module';

//import { Category } from './IE_Category';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  base_url: string;

  constructor(private httpClient: HttpClient) {
    this.base_url = environment.springAppUrl;
  }

  addModule(moduleData: Module): Observable<any> {
    return this.httpClient.post<any>(this.base_url + 'api/addModule', moduleData, {responseType:'json'});
  }

  viewModules(categoryName: string): Observable<any> {
    return this.httpClient.get<any>(
      this.base_url + 'api/getModules?categoryName=' + categoryName,
      { responseType: 'json' }
    );
  }
}

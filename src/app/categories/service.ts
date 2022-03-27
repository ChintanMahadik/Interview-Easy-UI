import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from './IE_Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  base_url : string;
  
  constructor(private httpClient : HttpClient) { 
    this.base_url=environment.nodeAppUrl;
  }

  addCategories(category:string):Observable<any>{
   return this.httpClient.post(this.base_url+"createCategory", {"category_name":category});
  }

  viewCategories():Observable<any>{
   return this.httpClient.get<any>(this.base_url+"viewCategories", {responseType:'json'});
  }

}
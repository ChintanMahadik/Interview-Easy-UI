import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  base_url : string;
  
  constructor(private httpClient : HttpClient) { 
    this.base_url=environment.appUrl;
  }

  getHomeStartMessage():Observable<any>{
    return this.httpClient.get(this.base_url+"api/home", {responseType:'text'});
  }
}
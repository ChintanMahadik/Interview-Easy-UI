import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  base_url : string;
  
  constructor(private httpClient : HttpClient) { 
    this.base_url="https://interview-easy.azurewebsites.net/";
  }

  getHomeStartMessage():Observable<any>{
    return this.httpClient.get(this.base_url+"api/home", {responseType:'text'});
  }
}
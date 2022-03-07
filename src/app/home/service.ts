import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private httpClient : HttpClient) { }


  getHomeStartMessage():Observable<any>{
    return this.httpClient.get("api/home", {responseType:'text'});
  }
}
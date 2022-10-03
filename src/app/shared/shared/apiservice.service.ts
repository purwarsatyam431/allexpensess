import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl = environment.HttpUrl;
  postexpenses='newexpensess.json'
  postwasteexpenses='wasteexpensess.json'
  constructor(private http:HttpClient) { }
  post(data:any){
    return this.http.post(this.baseUrl+this.postwasteexpenses,data)
  }
  getpost(type:any){
    return this.http.get(this.baseUrl+type)
  }
}

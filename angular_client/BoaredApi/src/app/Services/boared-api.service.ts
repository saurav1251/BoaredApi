import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BoaredApiService {
  private readonly baseUri:string="http://www.boredapi.com/api/";
  constructor(private http: HttpClient) { }
  getDataByType(boaredType:string){
   return  this.http.get(`${this.baseUri}activity?type=${boaredType}`);
  }
}

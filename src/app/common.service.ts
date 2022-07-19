import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  updateCafe(id: any, value: any) {
    throw new Error('Method not implemented.');
  }
  URL="http://localhost:3000/cafe";

  constructor(private _http:HttpClient) { }
  getCafeList(){return this._http.get(this.URL)}

  addCafe(data: any){
    return this._http.post(this.URL,data);
  }
  deleteCafe(id: any){
    return this._http.delete(`${this.URL}/${id}`);
  }
  getCurrentData(id: any){
    return this._http.delete(`${this.URL}/${id}`);
  }
}

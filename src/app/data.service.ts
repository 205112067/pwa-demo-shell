import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {

  }

  getJoke() {
    return this._http.get("https://api.icndb.com/jokes/random");
  }
}

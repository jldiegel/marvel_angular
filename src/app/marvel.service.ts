import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  private baseUrl: string = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f20d37bc05367a3e06a9d0b76343bb96&hash=84bbda2fd94e90465e2b53c53e9838bc&limit=50";
  private searchUrl: string = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f20d37bc05367a3e06a9d0b76343bb96&hash=84bbda2fd94e90465e2b53c53e9838bc&nameStartsWith=";

  constructor(private http: Http) { }

  getCharacterData(): Observable<any> {

    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })

  }

  getSearch(charInput): Observable<any> {

    return this.http.get(this.searchUrl + charInput)
      .map(result => {
        return result.json()
      })
  }
}

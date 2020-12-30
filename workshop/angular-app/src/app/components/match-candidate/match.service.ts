import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidate } from './candidate';
import { Observable, of } from 'rxjs';
//import { CANDIDATES } from './candidates-mock';
import { AppConfig } from 'src/app/app.config.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  apiURL = AppConfig.settings.endPointApiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getNext(): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.apiURL}/candidates/match`);
    //return of(CANDIDATES[Math.floor(Math.random() * Math.floor(3))]);
  }
}

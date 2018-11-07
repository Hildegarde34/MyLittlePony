import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url: String = 'http://localhost:8070/Race'
  races: Array<Race>;

  constructor(private http: HttpClient, private router: Router) {
    this.races = [];
    this.races = RACES;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  getAllRaces(): Observable<Array<Race>> {
    return this.http.get<Array<Race>>(this.url + '/getRaces', this.httpOptions);
  }

  addRace(race: Race): void {
    this.http.post(this.url + '/addRace', race, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}

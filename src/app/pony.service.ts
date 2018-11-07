import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pony } from './pony';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  url: String = 'http://localhost:8070/Pony'
  ponies: Array<Pony>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private router: Router) { 
    this.ponies = [];
  }

  getAllPonies(): Observable<Array<Pony>> {
    return this.http.get<Array<Pony>>(this.url + '/getPonies', this.httpOptions);
  }

  getPony(id: number): Observable<Pony> {
    return this.http.get<Pony>(this.url + '/getPony/' + id, this.httpOptions);
  }

  addPony(pony: Pony): void {
    this.http.post(this.url + '/addPony', pony, this.httpOptions).subscribe(() => this.router.navigate(['']));
  }

  updatePony(id: number, pony: Pony): void {
    this.http.put(this.url + '/updatePony/' + id, pony, this.httpOptions).subscribe(() => this.router.navigate(['']));
  }

  deletePony(id: number, pony: Pony): void {
    this.http.delete(this.url + '/deletePony/' + id, this.httpOptions).subscribe(() => this.router.navigate(['']));
  }
  
}

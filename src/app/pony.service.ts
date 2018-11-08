import { Injectable } from '@angular/core';
import { Observable, of, race } from 'rxjs';
import { Pony } from './pony';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RaceService } from './race.service';

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
  
  constructor(private http: HttpClient, private service: RaceService, private router: Router) { 
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
  
  deletePony(id: number): void {
    
    // let participeoupas: boolean = false;
    
    // this.service.getAllRaces().subscribe(// si le poney est dans la course, alors message delete, sinon message
    //   r => {
    //     for(let race of r)
    //     {
    //       for(let pony of race.poniesRace){
    //         if (pony.id === id) {
    //           participeoupas = true;
    
    //         } else {
    //           participeoupas = false;
    //         }
    //       }
    //     }
    //     if (participeoupas === true){
    //       for(let race of r)
    //       {
    //         race.poniesRace.filter((p) => p.id !== id);
    //         this.service.updateRace(race.id, race);
    //       }
    //       this.http.delete(this.url + '/deletePony/' + id, this.httpOptions).subscribe(() => this.router.navigate(['']));
    //     } else {
    //       this.http.delete(this.url + '/deletePony/' + id, this.httpOptions).subscribe(() => this.router.navigate(['']));
    //     }
    
    //   });
    
    this.http.delete(this.url + '/deletePony/' + id, this.httpOptions).subscribe(() => this.router.navigate(['']));
  }
  
}

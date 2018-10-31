import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  ponies: Array<Pony>;
  constructor(private service: RaceService, private router: Router, private servicePony: PonyService) { 
    this.model = new Race();
    this.servicePony.getAllPonies().subscribe(p => this.ponies = p);
  }

  ngOnInit() {
  }
  onSubmit() {
    this.service.addRace(this.model);
    this.router.navigate(['/Races'])
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Router } from '@angular/router';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { Pony } from '../pony';

@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form-component.html',
  styleUrls: ['./race-reactive-form-component.css']
})
export class RaceReactiveFormComponent implements OnInit {

  poniesTarget: Pony[];
  poniesSource: Pony[];

  raceForm = this.fb.group({
    location: ['location', Validators.required],
    date: ['date', Validators.required],
    poniesRace: [[]]
  })

  constructor(
    private fb: FormBuilder,
    private service: RaceService,
    private ponyService: PonyService,
    private router: Router){
      this.poniesTarget = [];
      this.ponyService.getAllPonies().subscribe(v=>this.poniesSource=v);
    }
 

  ngOnInit() {
  }

  onSubmit(){
    let r: Race = this.raceForm.value;
    const dateFinal = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
    r.date = dateFinal;
    r.poniesRace = this.poniesTarget;
    console.log(r);
    this.service.addRace(r);
    this.poniesTarget.forEach((x) => this.poniesSource.push(x)); 
    this.router.navigate(['/']);
  }
}

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

  ponyModel: Pony[];
  ponies: Pony[];

  raceForm = this.fb.group({
    name: ['nom', Validators.required],
    date: ['date', Validators.required],
    poniesRace: [[]]
  })

  constructor(
    private fb: FormBuilder,
    private service: RaceService,
    private ponyService: PonyService,
    private router: Router){
      this.ponyModel = [];
      this.ponyService.getAllPonies().subscribe(v=>this.ponies=v);
    }
 

  ngOnInit() {
  }

  onSubmit(){
    let r: Race = this.raceForm.value;
    r.poniesRace = this.ponyModel;
    console.log(r);
    this.service.addRace(r);
    this.router.navigate(['/']);
  }
}

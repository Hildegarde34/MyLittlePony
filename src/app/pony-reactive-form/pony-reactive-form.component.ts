import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PonyService } from '../pony.service';
import { Pony } from '../pony';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {
  add: boolean;
  idPony: number;
  
  ponyForm = this.fb.group({
    name: ['nom', Validators.required],
    age: ['0', Validators.required],
    color: ['vert', Validators.required],
    weight: ['0', Validators.required],
  })
  
  constructor(
    private fb: FormBuilder,
    private service: PonyService,
    private router: Router,
    private route: ActivatedRoute){}
    
    
    ngOnInit() {
      if (this.route.snapshot.paramMap.get('id') === null) {
        this.add = true;
      } else {
        this.add = false;
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
        this.idPony = id;
        this.service.getPony(id).subscribe(pony => this.ponyForm.setValue({
            name: pony.name,
            age: pony.age,
            color: pony.color,
            weight: pony.weight
          }));
          
        }
        
      }
      
      onSubmit(){
        let pony: Pony = this.ponyForm.value;
        if (this.add) {
          this.service.addPony(pony);
          this.router.navigate(['/Ponies']);
        } else {
          this.service.updatePony(this.idPony, pony);
        }
        
      }
    }
    
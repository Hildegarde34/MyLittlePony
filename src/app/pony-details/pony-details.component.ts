import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony';

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {
  @Input() pony : Pony;
  // constructor : appelé une seule fois au lancement de l'application
  constructor() { 
      // this.pony = new Pony('Marshmallow',75,8,'rose');
  } 

  // ngOnInit : appelé à chaque rafraichissement des composants html
  ngOnInit() { 
  }
}

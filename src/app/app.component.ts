import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My little pony';
  identifiant: string;
  
  constructor() {
  }

  deconnexion() {
    sessionStorage.removeItem('user');
    this.identifiant = undefined;
    alert(" À bientôt !");
  }

  ngOnInit() {
    this.identifiant = sessionStorage.getItem('user'); 
  }
}
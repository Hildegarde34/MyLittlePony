import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  model: User;
  constructor(private app: AppComponent) { // pour récupérer la fonction ngOnInit() de AppComponent dans le onSubmit()
    this.model = new User();
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    // si le password entré par l'utilisateur = le password
    // et si l'identifiant entré par l'utilisateur = l'identifiant
    // alors on stocke l'identifiant dans la session
    
    if (this.model.logging === "toto" && this.model.pass === "password"){
      sessionStorage.setItem('user', this.model.logging);
      alert("Vous êtes connecté !");
      this.app.ngOnInit();
    } else {
      alert("Désolé, l'identifiant ou le password n'existent pas. Veuillez ré-essayer.");
    }
  }
}

export class User {
    
    logging: string = 'identifiant'; // ce qui va s'afficher dans le champ
    pass: string = 'mot de passe';
    
    constructor(logging?: string) {
       this.logging = logging === undefined? 'identifiant':logging;
    }
    
}

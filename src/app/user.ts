export class User {
    
    logging: string; // ce qui va s'afficher dans le champ
    pass: string;
    
    constructor(logging?: string) {
       this.logging = logging;
    }
    
}

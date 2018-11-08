import { Pony } from './pony';

export class Race {
    id: number;
    location: string;
    date: Date;
    poniesRace: Array<Pony>;

    constructor(location?: string, date?: Date) {
        this.id = 0;
        this.location = location,
            this.date = date;
        this.poniesRace = [];
        this.date = date === undefined? new Date(): date;
    }

}
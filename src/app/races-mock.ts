import { Race } from './race';

export const RACES: Array<Race> = [
    {
        id: 1, location: 'Montpellier', date: new Date(), poniesRace: 
        [{ id: 1, name: 'Rainbow', weight: 57, color: 'arc-en-ciel', age: 8 },
        { id: 2, name: 'Marshmallow', weight: 78, color: 'rose', age: 12 },
        { id: 3, name: 'Colombin', weight: 43, color: 'marron', age: 3 }, 
        { id: 4, name: 'Coquelicot', weight: 64, color: 'rouge', age: 9 },
        { id: 5, name: 'Blue Lake', weight: 59, color: 'bleu-lagon', age: 7 }]
    },
    {
        id: 2, location: 'Cape Town', date: new Date('11/31/2018'), poniesRace: 
        [{ id: 2, name: 'Marshmallow', weight: 78, color: 'rose', age: 12 }, 
        { id: 5, name: 'Blue Lake', weight: 59, color: 'bleu-lagon', age: 7 }]
    },
    {
        id: 3, location: 'Londres', date: new Date('12/24/2018'), poniesRace: 
        [{ id: 1, name: 'Rainbow', weight: 57, color: 'arc-en-ciel', age: 8 },
        { id: 2, name: 'Marshmallow', weight: 78, color: 'rose', age: 12 }]
    },
    {
        id: 4, location: 'Chicoutimi', date: new Date('11/02/2018'), poniesRace: 
        [{ id: 3, name: 'Colombin', weight: 43, color: 'marron', age: 3 }, 
        { id: 4, name: 'Coquelicot', weight: 64, color: 'rouge', age: 9 },
        { id: 5, name: 'Blue Lake', weight: 59, color: 'bleu-lagon', age: 7 }]
    },
    {
        id: 5, location: 'Dakar', date: new Date('01/07/2019'), poniesRace: 
        [{ id: 2, name: 'Marshmallow', weight: 78, color: 'rose', age: 12 },
        { id: 3, name: 'Colombin', weight: 43, color: 'marron', age: 3 }, 
        { id: 4, name: 'Coquelicot', weight: 64, color: 'rouge', age: 9 }]
    }
];
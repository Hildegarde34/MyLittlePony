import { Pipe, PipeTransform } from '@angular/core';
import { Pony } from './pony';

@Pipe({
  name: 'ponyTransform'
})
export class PonyTransformPipe implements PipeTransform {

  transform(pony: Pony, args?: any): string { // équivalent d'un toString
    return '' + pony.id + ' : ' + pony.name + " (age : " + pony.age + " ans, couleur : " + pony.color + ", poids : "+ pony.weight + " kg)";
  }

}

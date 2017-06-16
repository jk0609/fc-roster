import {Pipe, PipeTransform} from '@angular/core';
import {Player} from '../models/player.model';

@Pipe({
  name: "roles",
  pure: false
})


export class RolesPipe implements PipeTransform {
  transform(input: Player[], role) {
    var output: Player[] = [];
    if(role === "Damage") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === 'Damage') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (role === "Tank") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === 'Tank') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (role === "Healer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === 'Healer') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (role === "Support") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === 'Support') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

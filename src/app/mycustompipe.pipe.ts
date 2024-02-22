import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe',
  standalone: true
})
export class MycustompipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*10;
  }

}

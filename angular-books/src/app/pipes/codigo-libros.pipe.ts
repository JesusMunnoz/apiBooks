import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoLibros'
})
export class CodigoLibrosPipe implements PipeTransform {

  transform(value: number): string {
    let result: string;
    result = 'Ref - '+ value;
    return result;
  }

}

/*import { Pipe, PipeTransform } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: any): any {

    if (!arg || !value){
      return value;
    }

    let resultBooks = []
    for (let books of value){
      if(String(books.id_book).includes(arg)){
        console.log("estas introduciendo algo");
        resultBooks.push(books);
      };
    };
    return resultBooks;
  }
}*/
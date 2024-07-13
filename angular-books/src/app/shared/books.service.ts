import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  public books: Book[]

  private myApi = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
   }

  public getAll(): Observable<any>{
    return this.http.get(this.myApi);
  }
  
  public getOne(id_book: number): Observable<any> {
    return this.http.get(this.myApi + "/" + id_book);
  }

  public delete(id_book: number): Observable<any>{
    return this.http.delete(this.myApi, {body: {id_book}});
  }

  public add(book: Book): Observable<any> {
    return this.http.post(this.myApi, book);
  }

  public edit(book: Book): Observable<any> {
    return this.http.put(this.myApi, book);
  }
}

/*import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  

  public books: Book[] = [
    new Book("El capitán Alatriste", "Blada", "Arturo Perez-Reverte", 10.40, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 1, 1),
    new Book("La Bruja Mon", "Blada", "Pilar Mateos", 3.60, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 2, 1),
    new Book("Fray Perico y su borrico", "Blada", "Juan Muñoz Martín", 8.74, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 3, 1),
    new Book("Don Quijote de la Mancha", "Dura", "Miguel de Cervantes", 500000, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 4, 1),
    new Book("El Señor de los anillos", "Dura", "J. R. R. Tolkien", 65, "https://www.aytosanlorenzo.es/wp-content/uploads/2020/04/phalbm25732285_w980h638c1.jpg", 5, 1)
  ];

  private url = 'http://localhost:3000/books';

  constructor(private http: HttpClientModule) {
    this.books;
    console.log("constructor");
   }

  public getAll(): Book[]{
    console.log("get all");
    return this.books;
  }

  public getOne(id_book: number): Book {
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].id_book == id_book){
        console.log(this.books[i])
        return this.books[i];
      }
    }
    return this.books.find(book => book.id_book === id_book)
  }

  public add(book: Book): void{
    this.books.push(book);
  }

  public edit(book: Book): boolean{
    
    let index = -1;
    
    for (let i = 0; i < this.books.length; i++){
      if (this.books[i].id_book == book.id_book){
        index = i;
        break;
      }
    }

    if (index != -1){
      this.books[index] = book

      console.log(book);
      console.log(this.books);

      console.log("funciona");
      return true;
    }else{
      console.log("no funciona");
      return false;
    }
  }

  public delete(id_book: number): boolean{
    let i = this.books.findIndex(b => b.id_book === id_book);
    if (i != -1){
      this.books.splice(i, 1)
      return true;
    }
    return false;
  }

}*/
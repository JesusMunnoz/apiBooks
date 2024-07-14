import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private booksService: BooksService, private router: Router) {}

  add(insrtName: string, insrtTapa: string, insrtAutor: string, insrtPrecio: number, insrtPhoto: string, insrtCode: number): void {
    let newBook = new Book(insrtName, insrtTapa, insrtAutor, insrtPrecio, insrtPhoto, insrtCode);
    this.booksService.add(newBook).subscribe({
      next: (response: Respuesta) => {
        console.log('Book anadido:', response);
        this.router.navigateByUrl("/books");
      },
      error: (err) => {
        console.error('Error anadiendo book:', err);
      }
    });
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public addbooks: Book[];

  constructor(private booksService: BooksService, private router:Router ){}

  add(insrtName:string, insrtTapa:string, insrtAutor:string, insrtPrecio:number, insrtPhoto:string, insrtCode:number):void{
    let newBook = new Book( insrtName, insrtTapa, insrtAutor, insrtPrecio, insrtPhoto, insrtCode);
    this.booksService.add(newBook);
    this.addbooks = this.booksService.getAll();
    console.log(newBook);
    this.router.navigateByUrl("/books");
  }

  ngOnInit(): void{
    this.addbooks = this.booksService.getAll()
  }
}
  */
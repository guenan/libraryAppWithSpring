package com.mytech.libraryapp.controller;

import com.mytech.libraryapp.model.Book;
import com.mytech.libraryapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> showAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/searchBooks")
    public List<Book> showBooksByName(@RequestParam("book_name") String bookName){
        return bookService.getBooksByName(bookName);
    }
}

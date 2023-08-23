package com.mytech.libraryapp.controller;

import com.mytech.libraryapp.model.Book;
import com.mytech.libraryapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/searchNamedBooks")
    public List<Book> showBooksByName(@RequestParam("book_name") String bookName){
        return bookService.getBooksByName(bookName);
    }

    @GetMapping("/searchNameCategoryBooks")
    public List<Book> showBooksByCategory(@RequestParam("book_name") String bookName, @RequestParam("book_category") String category){
        return bookService.getBooksByNameCategory(category, bookName);
    }

    @GetMapping("/searchBookId/{id}")
    public Book showBookDetail(@PathVariable int id){
        Optional<Book> opBook = bookService.getBookById(id);
        if(opBook.isPresent()){
            return opBook.get();
        }
        return null;
    }
}

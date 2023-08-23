package com.mytech.libraryapp.service;

import com.mytech.libraryapp.model.Book;
import com.mytech.libraryapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public List<Book> getBooksByName(String bookName){
        return bookRepository.findByBookNameContaining(bookName);
    }

    public List<Book> getBooksByNameCategory(String bookCategory, String bookName){
        if(bookCategory.toLowerCase().equals("All".toLowerCase())){
            return getBooksByName(bookName);
        }
        return bookRepository.findByBookCategoryContainingAndBookNameContaining(bookCategory, bookName);
    }

    public Optional<Book> getBookById(int id){
        return bookRepository.findById(id);
    }
}

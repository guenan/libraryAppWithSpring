package com.mytech.libraryapp.service;

import com.mytech.libraryapp.model.Book;
import com.mytech.libraryapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<Book> getBooksByCategory(String bookCategory){
        if(bookCategory.toLowerCase().equals("All".toLowerCase())){
            return bookRepository.findAll();
        }
        return bookRepository.findByBookCategoryContaining(bookCategory);
    }
}

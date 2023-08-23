package com.mytech.libraryapp.repository;

import com.mytech.libraryapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{
    List<Book> findByBookNameContaining(String bookName);
    List<Book> findByBookCategoryContainingAndBookNameContaining(String bookCategory, String bookName);

}

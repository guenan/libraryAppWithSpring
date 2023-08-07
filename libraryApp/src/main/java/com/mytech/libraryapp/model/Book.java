package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name="Book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int bookId;

    @Column(name = "name")
    private String bookName;

    @Column(name = "description")
    private String bookDescription;

    @Column(name = "image_book")
    private String bookImage;
    @Column(name = "category")
    private String bookCategory;
    @Column(name = "author")
    private String bookAuthor;

    @Column(name = "copies_available")
    private int copies_available;
    @Column(name = "copies_in_stock")
    private int copies_in_tock;

/*    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY,
            mappedBy = "book"

    )
    private List<BookReview> bookReviews;*/
}

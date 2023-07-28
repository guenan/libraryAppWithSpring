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
    @Column(name = "ID", nullable = false)
    private int bookId;

    @Column(name = "Name")
    private String bookName;

    @Column(name = "Description")
    private String bookDescription;

    @Column(name = "Image")
    private String bookImage;
    @Column(name = "Category")
    private String bookCategory;
    @Column(name = "Author")
    private String bookAuthor;
    @Column(name = "CopiesInStock")
    private int copiesInStock;
    @Column(name = "CopiesAvailable")
    private int copiesAvailable;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY,
            mappedBy = "UserID"

    )
    private List<BookReview> bookReviews;
}

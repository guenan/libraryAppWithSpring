package com.mytech.libraryapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "Rating")
public class BookReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int bookReviewId;
    @Column(name = "score")
    private int bookReviewScore;
    @Column(name = "description")
    private String bookReviewDescription;
    @Column(name = "rating_date")
    private Date bookReviewDate;
    @ManyToOne(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            fetch = FetchType.EAGER

    )
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            fetch = FetchType.EAGER

    )
    @JoinColumn(name = "book_id")
    @JsonIgnore
    private Book book;

}

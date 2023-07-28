package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int questionId;
    @Column(name = "Content")
    private String questionContent;
    @Column(name = "QuestionDate")
    private Date questionDate;
    @OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "QuestionID")
    private Answer answer;

}

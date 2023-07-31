package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int answerId;
    @Column(name = "content")
    private String answerContent;
    @Column(name = "answer_date")
    private Date answerDate;

}

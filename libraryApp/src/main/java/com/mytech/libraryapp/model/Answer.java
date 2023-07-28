package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int answerId;
    @Column(name = "Content")
    private String answerContent;
    @Column(name = "AnswerDate")
    private Date answerDate;

}

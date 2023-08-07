package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int questionId;
    @Column(name = "content")
    private String questionContent;
    @Column(name = "question_date")
    private Date questionDate;
/*    @OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "question_id")
    private Answer answer;*/

}

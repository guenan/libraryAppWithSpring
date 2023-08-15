package com.mytech.libraryapp.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int userId;
    @Column(name = "name")
    private String userName;
    @Column(name = "password")
    private String userPassword;
    @Column(name = "email")
    private String userEmail;
    @Column(name = "role")
    private String userRole;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY,
            mappedBy = "user"
    )
    private List<Loan> loans;
    /*
    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true
    )
    @JoinColumn(name = "user_id")
    private List<Question> questions;*/

}

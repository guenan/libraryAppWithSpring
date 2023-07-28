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
    @Column(name = "ID", nullable = false)
    private int userId;
    @Column(name = "Name")
    private String userName;
    @Column(name = "Password")
    private String userPassword;
    @Column(name = "Email")
    private String userEmail;
    @Column(name = "Role")
    private String userRole;
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY,
            mappedBy = "user"
    )
    private List<Loan> loans;
    @OneToMany(
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            orphanRemoval = true
    )
    @JoinColumn(name = "UserID")
    private List<Question> questions;

}

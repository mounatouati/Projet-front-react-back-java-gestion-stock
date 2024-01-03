package com.example.demo.entities;

import java.util.ArrayList;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;


import lombok.NoArgsConstructor;
import jakarta.persistence.OneToMany;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Gamme {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom; 
	@OneToMany(mappedBy = "gamme", cascade = CascadeType.ALL)
	private List<Article> articles ;	
	
}
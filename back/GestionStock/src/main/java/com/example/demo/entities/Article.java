package com.example.demo.entities;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Nom;
	private String Code; // en mètres carrés
	private String Nserie;
	private String Codephysique ;
	private Date Datederniermouvement;
	@ManyToOne
	private Typearticle typearticle;
	@ManyToOne
	private Gamme gamme;	
	@OneToMany (mappedBy="article")
	private List<MvtStock> mvtStocks;

}
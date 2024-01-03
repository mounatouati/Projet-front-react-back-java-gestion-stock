package com.example.demo.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.example.demo.enums.Etat_Article;
import com.example.demo.enums.TypeMvtStk;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MvtStock {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date Datemouvement;
	private int Quantite;
	@Enumerated(EnumType.STRING)
	 Etat_Article etatArticle;
	@Enumerated(EnumType.STRING)
	 TypeMvtStk  typeMvt;	
	@ManyToOne
	private Article article;
}
package com.example.demo.entities;



import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Typearticle {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String type;
	@OneToMany(mappedBy = "typearticle",cascade = CascadeType.ALL)
	private List<Article> articles ;	
}
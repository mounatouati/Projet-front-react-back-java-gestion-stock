package com.example.demo.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.MvtStock;
@RepositoryRestResource
public interface MvtStockRepository extends JpaRepository<MvtStock, Long> {
	
	@Query("select sum(m.Quantite) from MvtStock m where m.article.id = :idArticle")
	  int stockReelArticle(@Param("idArticle") int idArticle);
	
	 	

}
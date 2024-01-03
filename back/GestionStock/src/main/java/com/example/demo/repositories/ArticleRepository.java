package com.example.demo.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.dtos.ArticleDto;
import com.example.demo.entities.Article;
import com.example.demo.entities.MvtStock;
@RepositoryRestResource
public interface ArticleRepository extends JpaRepository<Article, Long> {
	 Optional<Article> findById(int id);

	  List<Article> findAllByGammeId(Integer gammeid);
	  List<Article> findAllByTypearticle_Id(Integer typearticle_id);

	void deleteById(int id);
	//  Optional<Article> findArticleByCodeArticle(String codeArticle);
/*
	@Query("SELECT new com.example.demo.dtos.ArticleDto(a.id, a.code, a.nom, a.nserie, a.codephysique, a.datederniermouvement, g, t) " +
		       "FROM Article a " +
		       "JOIN a.gamme g " +
		       "JOIN a.typearticle t")
		List<ArticleDto> getArticlesWithGammeAndType();*/
}
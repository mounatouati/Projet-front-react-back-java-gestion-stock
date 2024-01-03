package com.example.demo.dtos;


import java.util.Date;

import com.example.demo.entities.Article;
import com.example.demo.entities.Gamme;
import com.example.demo.entities.Typearticle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

  private int id;
  private String code;
  private String nom;
  private String nserie;
  private String codephysique ;
  private Date datederniermouvement;
  private GammeDto gamme ;
  private TypearticleDto typearticle ;
  
  
  public static ArticleDto fromEntity(Article article) {
	    if (article == null) {
	      return null;
	    }
	    return ArticleDto.builder()
	        .id(article.getId())
	        .code(article.getCode())
	        .nom(article.getNom())
	        .nserie(article.getNserie())
	        .codephysique(article.getCodephysique())
	        .datederniermouvement(article.getDatederniermouvement())
	        .gamme(GammeDto.fromEntity(article.getGamme()))
	        .typearticle(TypearticleDto.fromEntity(article.getTypearticle()))
	        .build();
	  }

	  public static Article toEntity(ArticleDto articleDto) {
	    if (articleDto == null) {
	      return null;
	    }
	    Article article = new Article();
	    article.setId(articleDto.getId());
        article.setCode(articleDto.getCode());
        article.setNom(articleDto.getNom());
        article.setNserie(articleDto.getNserie());
        article.setCodephysique(articleDto.getCodephysique());
        article.setDatederniermouvement(articleDto.getDatederniermouvement());
        article.setGamme(GammeDto.toEntity(articleDto.getGamme()));
        article.setTypearticle(TypearticleDto.toEntity(articleDto.getTypearticle()));
      return article;
	  }
}


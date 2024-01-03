package com.example.demo.dtos;


import java.util.Date;

import com.example.demo.entities.MvtStock;
import com.example.demo.enums.Etat_Article;
import com.example.demo.enums.TypeMvtStk;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class MvtStockDto {
	private int id;
	private Date datemouvement;
	private int quantite;
	private TypeMvtStk typeMvt;
	private Etat_Article etatArticle;
	private ArticleDto article;

	  public static MvtStockDto fromEntity(MvtStock mvtStk) {
	    if (mvtStk == null) {
	      return null;
	    }

	    return MvtStockDto.builder()
	        .id(mvtStk.getId())
	        .datemouvement(mvtStk.getDatemouvement())
	        .quantite(mvtStk.getQuantite())
	        .typeMvt(mvtStk.getTypeMvt())
	        .etatArticle(mvtStk.getEtatArticle())
	        .article(ArticleDto.fromEntity(mvtStk.getArticle()))
	        .build();
	  }

	  public static MvtStock toEntity(MvtStockDto dto) {
	    if (dto == null) {
	      return null;
	    }

	    MvtStock mvtStk = new MvtStock();
	    mvtStk.setId(dto.getId());
	    mvtStk.setDatemouvement(dto.getDatemouvement());
	    mvtStk.setQuantite(dto.getQuantite());
	    mvtStk.setTypeMvt(dto.getTypeMvt());
	    mvtStk.setEtatArticle(dto.getEtatArticle());
	    mvtStk.setArticle(ArticleDto.toEntity(dto.getArticle()));
	     return mvtStk;
	  }	
	
}
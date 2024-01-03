package com.example.demo.services;


import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.dtos.ArticleDto;
import com.example.demo.dtos.GammeDto;
import com.example.demo.dtos.MvtStockDto;
import com.example.demo.dtos.TypearticleDto;
import com.example.demo.entities.Article;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Gamme;
import com.example.demo.entities.MvtStock;
import com.example.demo.entities.Typearticle;
import com.example.demo.repositories.MvtStockRepository;


public interface ImmoService {
	
	Article saveArticle(Article article,int gammeId,int typearticleId);
	Article updateArticle(Article article);
	
	void deleteArticle(int id);
	ArticleDto save(ArticleDto dto);

    ArticleDto findById(Integer id);

    ArticleDto findByCodeArticle(String codeArticle);

    List<ArticleDto> findAllArticle();
	
	Typearticle saveTypeArticle(Typearticle typearticle);
	Typearticle updateTypeArticle(Typearticle typearticle);
	List<Typearticle> ListTypeArticle();
	List<TypearticleDto> ListTypeArticleDto();
	Typearticle findTypearticleByType(String typearticle);
	
	Gamme saveGamme(Gamme gamme);
	Gamme updateGamme(Gamme gamme);
	List<GammeDto> ListGammeDto();
	List<Gamme> ListGamme();
	Gamme findGammeByNom(String nom);
	void deleteGamme(Integer id);
	MvtStock saveMvtStock(MvtStock mvtStock);
	MvtStock updateMvtStock(MvtStock mvtStock);
	List<MvtStockDto> ListMvtStockDto();
	int stockReelArticle(int idArticle);

	List<MvtStockDto> mvtStkArticle(Integer idArticle);

	MvtStockDto entreeStock(MvtStockDto dto);

	MvtStockDto sortieStock(MvtStockDto dto);


	Employee saveEmployee(Employee gamme);
	Employee updateEmployee(Employee gamme);
	void deleteEmployee(long id);
	List<Employee> ListEmployee();
	//  MvtStockDto correctionStockPos(MvtStockDto dto);

	//  MvtStockDto correctionStockNeg(MvtStockDto dto);
	//List<ArticleDto> getArticlesWithGammeAndType();
}

package com.example.demo.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dtos.ArticleDto;
import com.example.demo.dtos.GammeDto;
import com.example.demo.dtos.MvtStockDto;
import com.example.demo.dtos.TypearticleDto;
import com.example.demo.entities.Article;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Gamme;
import com.example.demo.entities.MvtStock;
import com.example.demo.entities.Typearticle;
import com.example.demo.enums.TypeMvtStk;
import com.example.demo.repositories.ArticleRepository;
import com.example.demo.repositories.EmployeeRepository;
import com.example.demo.repositories.GammeRepository;
import com.example.demo.repositories.MvtStockRepository;
import com.example.demo.repositories.TypeArticleRepository;
import com.mysql.cj.util.StringUtils;

import ch.qos.logback.core.spi.ErrorCodes;
import exception.InvalidOperationException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
@Service
@Transactional
public class ImmoServiceImp implements ImmoService{

	@Autowired
	ArticleRepository articleRepository;
	@Autowired
	TypeArticleRepository typearticleRepository;
	@Autowired
	GammeRepository gammeRepository;
	@Autowired
	MvtStockRepository mvtStockRepository;
	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override	
	public Article saveArticle(Article article,int gammeId,int typearticleId) {
		/*Gamme gamme=new Gamme();
		gamme.setId(gammeId);
		Typearticle typearticle=new Typearticle();
		typearticle.setId(typearticleId);*/
		
		  // Récupérez les objets Gamme et Typearticle à partir de la base de données
	    Gamme gamme = gammeRepository.findById(gammeId).orElse(null);
	    Typearticle typearticle = typearticleRepository.findById(typearticleId).orElse(null);

	    // Vérifiez si les objets existent en base de données
	    if (gamme == null || typearticle == null) {
	        // Gérez l'erreur ou renvoyez null, selon le cas
	        return null;
	    }

	    // Associez les objets Gamme et Typearticle à l'article
		
		article.setGamme(gamme);
		article.setTypearticle(typearticle);
		
		return articleRepository.save(article);
	}
	
/*
	@Override
	
	public List<ArticleDto> ListArticle() {
		 List<Article> articles = articleRepository.findAll();
		    List<ArticleDto> articleDTOs = new ArrayList<>();

		    for (Article article : articles) {
		        ArticleDto articleDto = new ArticleDto();
		        
		        articleDto.setId(article.getId());
		        articleDto.setCode(article.getCode());
		        articleDto.setNom(article.getNom());
		        articleDto.setNserie(article.getNserie());
		       // articleDto.setCodephysique(article.getCodephysique());
		       // articleDto.setDatederniermouvement(article.getDatederniermouvement());
		        articleDto.setTypearticle(article.getTypearticle().getId());
		        articleDto.setGammeId(article.getGamme().getId());

		        articleDTOs.add(articleDto);
		    }

		    return articleDTOs;
	}*/
	
	@Override
	public List<Gamme> ListGamme() {
		return gammeRepository.findAll();
		  
	}
	@Override
	public List<GammeDto> ListGammeDto() {	  
		    return gammeRepository.findAll().stream()
		        .map(GammeDto::fromEntity)
		        .collect(Collectors.toList());
	}
	@Override
	public List<TypearticleDto> ListTypeArticleDto() {	  
		    return typearticleRepository.findAll().stream()
		        .map(TypearticleDto::fromEntity)
		        .collect(Collectors.toList());
	}
	
	@Override
    public List<MvtStockDto> ListMvtStockDto() {
		       
        return mvtStockRepository.findAll().stream()
        		.map(MvtStockDto::fromEntity).collect(Collectors.toList())  ;
        }
        
	@Override
	public Typearticle saveTypeArticle(Typearticle typearticle) {
		// TODO Auto-generated method stub
		return typearticleRepository.save(typearticle);
	}
	@Override
	public Typearticle updateTypeArticle(Typearticle typearticle) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Typearticle> ListTypeArticle() {
		// TODO Auto-generated method stub
		return typearticleRepository.findAll();
	}
	@Override
	public Gamme saveGamme(Gamme gamme) {
		// TODO Auto-generated method stub
		return gammeRepository.save(gamme);
	}
	@Override
	public Gamme updateGamme(Gamme gamme) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public MvtStock saveMvtStock(MvtStock mvtStock) {
		// TODO Auto-generated method stub
		return mvtStockRepository.save(mvtStock);
	}
	@Override
	public MvtStock updateMvtStock(MvtStock mvtStock) {
		// TODO Auto-generated method stub
		 return mvtStockRepository.save(mvtStock);
	}


	@Override
	public Article updateArticle(Article article) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int stockReelArticle(int idArticle) {
		articleRepository.findById(idArticle);
	      return mvtStockRepository.stockReelArticle(idArticle);
	   
	}

	@Override
	public List<MvtStockDto> mvtStkArticle(Integer idArticle) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MvtStockDto entreeStock(MvtStockDto dto) {
		 return entreePositive(dto, TypeMvtStk.ENTREE);
	}
	 

	@Override
	public MvtStockDto sortieStock(MvtStockDto dto) {
		 return sortieNegative(dto, TypeMvtStk.SORTIE);
	}

	@Override
	public ArticleDto save(ArticleDto dto) {
		// TODO Auto-generated method stub
		return ArticleDto.fromEntity(
                articleRepository.save(
                        ArticleDto.toEntity(dto)
                )
        );
	}

	@Override
	public ArticleDto findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArticleDto findByCodeArticle(String codeArticle) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ArticleDto> findAllArticle() {
		 return articleRepository.findAll().stream()
	                .map(ArticleDto::fromEntity)
	                .collect(Collectors.toList());
	}

	@Override
	public Gamme findGammeByNom(String nom) {
		Optional<Gamme> gammeOptional = gammeRepository.findByNom(nom);
        return gammeOptional.orElse(null); // Si la gamme n'est pas trouvée, renvoyer null ou gérer l'erreur selon le cas.  
	}
	@Override
	public Typearticle findTypearticleByType(String typearticle) {
		Optional<Typearticle> typearticleOptional = typearticleRepository.findTypearticleByType(typearticle);
        return typearticleOptional.orElse(null); // Si la gamme n'est pas trouvée, renvoyer null ou gérer l'erreur selon le cas. 
	}

	@Override
	public void deleteArticle(int id) {
		    	articleRepository.deleteById(id);
	}
   
	
	
	
	  private MvtStockDto entreePositive(MvtStockDto dto, TypeMvtStk typeMvtStk) {
		    dto.setQuantite(Math.abs(dto.getQuantite()));
		    dto.setTypeMvt(typeMvtStk);
		    return MvtStockDto.fromEntity(
		    		mvtStockRepository.save(MvtStockDto.toEntity(dto))
		    );
		  }
	  private MvtStockDto sortieNegative(MvtStockDto dto, TypeMvtStk typeMvtStk) {
		   /* List<String> errors = MvtStkValidator.validate(dto);
		    if (!errors.isEmpty()) {
		      log.error("Article is not valid {}", dto);
		      throw new InvalidEntityException("Le mouvement du stock n'est pas valide", ErrorCodes.MVT_STK_NOT_VALID, errors);
		    }*/
		    dto.setQuantite( Math.abs(dto.getQuantite()) * -1);
		    dto.setTypeMvt(typeMvtStk);
		    return MvtStockDto.fromEntity(
		    		mvtStockRepository.save(MvtStockDto.toEntity(dto))
		    );
		  }

	@Override
	public void deleteGamme(Integer id) {
		 List<Article> articles = articleRepository.findAllByGammeId(id);
		    if (!articles.isEmpty()) {
		    	 String messageErreur = "impossible de  supprimer  cette gamme est lieé a des article.";
		            throw new InvalidOperationException(messageErreur);
		    }
		    gammeRepository.deleteById(id);
		
	}
/*
	@Override
	public List<ArticleDto> getArticlesWithGammeAndType() {
		// TODO Auto-generated method stub
		return articleRepository.getArticlesWithGammeAndType();
	}*/

	@Override
	public Employee saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}

	@Override
	public void deleteEmployee(long id) {
		// TODO Auto-generated method stub
		 employeeRepository.deleteById(id);
	}

	@Override
	public List<Employee> ListEmployee() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}
}

package com.example.demo.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dtos.ArticleDto;
import com.example.demo.dtos.GammeDto;
import com.example.demo.dtos.MvtStockDto;
import com.example.demo.dtos.TypearticleDto;
import com.example.demo.entities.Article;
import com.example.demo.entities.Employee;
import com.example.demo.entities.Gamme;
import com.example.demo.entities.HistoriqueUtilisateur1;
import com.example.demo.entities.MvtStock;
import com.example.demo.entities.Typearticle;
import com.example.demo.services.HistoriqueUtilisateurService;
import com.example.demo.services.ImmoService;

import exception.InvalidOperationException;

@RestController
@RequestMapping(path = "/api/v1/stock")
public class ImmoRestController {
	@Autowired
	private ImmoService immoService;
	
	@Autowired
	private HistoriqueUtilisateurService historiqueService;
 
	@GetMapping(path = "/articles")
	
	public List<ArticleDto> findAllArticle() {
		// List<ArticleDto> articleDtos = immoService.ListArticle();
		 //   return articleDtos;
		return immoService.findAllArticle();
				}
	
	@GetMapping(path = "/mvtstocks")
	public List<MvtStockDto> ListMvtStockDto() {
		return immoService.ListMvtStockDto();
	}
	@GetMapping(path = "/gammes")
	public List<GammeDto> ListGammeDto() {
		 List<GammeDto> gammeDtos = immoService.ListGammeDto();
		    return gammeDtos;
	}
	@GetMapping(path = "/typearticle")
	public List<TypearticleDto> ListTypeArticleDto() {
		 List<TypearticleDto> typearticleDtos = immoService.ListTypeArticleDto();
		    return typearticleDtos;
	}
	/*@PostMapping(path = "/addArticle/{gammeId}/{typearticleId}")
	public ResponseEntity<Article> saveArticle(@RequestBody Article article, @PathVariable int gammeId,@PathVariable int typearticleId) {
        Article nouvelArticle = immoService.saveArticle(article, gammeId,typearticleId);
        return new ResponseEntity<>(nouvelArticle, HttpStatus.CREATED);
    }*/
	@PostMapping(path = "/addArticle/{gammeId}/{typearticleId}")
	public void saveArticle(@RequestBody Article article, @PathVariable int gammeId,@PathVariable int typearticleId) {
		 immoService.saveArticle(article, gammeId,typearticleId);   
		
    }
	@PostMapping(path = "/addGamme")
	public void addGamme(@RequestBody Gamme gamme) {
		immoService.saveGamme(gamme);                                                        
	}
	@GetMapping(path = "/gamme/{nom}")
	   public ResponseEntity<GammeDto> findGammeByNom(@PathVariable String nom) {
        Gamme gamme = immoService.findGammeByNom(nom);

        if (gamme == null) {
        	//String errorMessage = "La gamme avec le nom '" + nom + "' n'a pas été trouvée.";
            
            return ResponseEntity.notFound().build();
        }

        GammeDto gammeDto = GammeDto.fromEntity(gamme);
        return ResponseEntity.ok(gammeDto);
    }
	@GetMapping(path = "/typearticle/{type}")
	public ResponseEntity<TypearticleDto> findTypearticleByType(@PathVariable String type) {
		Typearticle typearticle =immoService.findTypearticleByType(type);
		if (typearticle == null) {
        	//String errorMessage = "La gamme avec le nom '" + nom + "' n'a pas été trouvée.";
            
            return ResponseEntity.notFound().build();
        }
		TypearticleDto typearticleDto=TypearticleDto.fromEntity(typearticle);
		return ResponseEntity.ok(typearticleDto);
	}
	@PostMapping(path = "/addTypeArticle")
	public void addTypeArticle(@RequestBody Typearticle typeArticle) {
		immoService.saveTypeArticle(typeArticle);
	}
	@PostMapping(path = "/entree")
	public void addentreeStock(@RequestBody MvtStockDto mvtStock) {
		immoService.entreeStock(mvtStock);
	}
	@PostMapping(path = "/sortie")
	public void addsortieStock(@RequestBody MvtStockDto mvtStock) {
		immoService.sortieStock(mvtStock);
	}
	@GetMapping(path = "/stockreel/{idArticle}")
	public int stockReelArticle(@PathVariable  int idArticle) {
		
	return	immoService.stockReelArticle(idArticle);
		
	}
    @DeleteMapping(path ="/deletearticle/{id}")
   public void deleteArticle(@PathVariable int id) {
    	immoService.deleteArticle(id);
    }
    @DeleteMapping(path ="/deletegamme/{id}")
   public ResponseEntity<String> deleteGamme(@PathVariable int id) {
   	
            try {
            	immoService.deleteGamme(id);
                return ResponseEntity.ok("L'élément a été supprimé avec succès.");
            } catch (InvalidOperationException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
            }
    }
	@PostMapping(path = "/addarticle")
	public void add(@RequestBody ArticleDto dto) {
		immoService.save(dto);                                                        
	}
	@PostMapping(path ="/enregistreractivite")
	    public void enregistrerActivite(@RequestBody HistoriqueUtilisateur1 historiqueUtilisateur1) {
	        historiqueService.enregistrerActiviteUtilisateur(historiqueUtilisateur1);
	    }
	
	@PostMapping(path = "/addemployee")
	public void add(@RequestBody Employee employee) {
		immoService.saveEmployee(employee);                                                        
	}
    @DeleteMapping(path ="/deleteemployee/{id}")
   public void deleteEmployee(@PathVariable long id) {
    	immoService.deleteEmployee(id);
    }
    @GetMapping(path = "/employees")
	public List<Employee> ListEmployee() {
		return immoService.ListEmployee();
	}
}

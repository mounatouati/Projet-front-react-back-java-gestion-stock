package com.example.demo;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.entities.Article;
import com.example.demo.entities.Gamme;
import com.example.demo.entities.Typearticle;
import com.example.demo.services.ImmoService;

@SpringBootApplication
public class GestionImmobiliereApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestionImmobiliereApplication.class, args);
	}
	@Bean
    CommandLineRunner start(ImmoService immoService) {
        return args -> {
//            // Créer un locataire
    /*     TypeArticle typearticle = new TypeArticle();
           typearticle.setType("BATTERIE");
           TypeArticle typearticle1 = new TypeArticle();
           typearticle1.setType("BLOC ALIMENTATION");
           TypeArticle typearticle2 = new TypeArticle();
           typearticle2.setType("BADGE");
           TypeArticle typearticle3 = new TypeArticle();
           typearticle3.setType("CARTE SIM");
           Gamme gamme= new Gamme();
           gamme.setNom("SURTEC");
           Gamme gamme1= new Gamme();
           gamme1.setNom("SECOM-CMI");
           Gamme gamme2= new Gamme();
           gamme2.setNom("SECOM-HME");
//            locataire1.setPrenom("TALEB");
//            immoService.saveLocataire(locataire1);
//            Locataire locataire2 = new Locataire();
//            locataire2.setDateNaissance(new Date());
//            locataire2.setPrenom("ddd");
//            immoService.saveLocataire(locataire2);
//            Locataire locataire3 = new Locataire();
//            locataire3.setDateNaissance(new Date());
//            locataire3.setAdresse("sss@live.fr");
//            locataire3.setNom("Mssss");
//            locataire3.setPrenom("qqq");
//            immoService.saveLocataire(locataire3);
//            Locataire locataire = new Locataire();
//            locataire.setDateNaissance(new Date());
//            locataire.setAdresse("jean@live.fr");
//            locataire.setNom("jean");
//            locataire.setPrenom("pierre");
//            immoService.saveLocataire(locataire);
//            Proprietaire proprietaire = new Proprietaire();
//            proprietaire.setDateNaissance(new Date());
//            proprietaire.setEmail("sakem@live.fr");
//            proprietaire.setNom("salem");
//            proprietaire.setPrenom("ahmed");
//            immoService.saveProprietaire(proprietaire);
//            Proprietaire proprietaire2 = new Proprietaire();
//            proprietaire2.setDateNaissance(new Date());
//            proprietaire2.setEmail("maram@live.fr");
//            proprietaire2.setNom("maram");
//            proprietaire2.setPrenom("loulou");
//            immoService.saveProprietaire(proprietaire2);
//            Proprietaire proprietaire1 = new Proprietaire();
//            proprietaire1.setDateNaissance(new Date());
//            proprietaire1.setEmail("fati@live.fr");
//            proprietaire1.setNom("med");
//            proprietaire1.setPrenom("fathi");
//            immoService.saveProprietaire(proprietaire1);
//            Proprietaire proprietaire3= new Proprietaire();
//            proprietaire3.setDateNaissance(new Date());
//            proprietaire3.setEmail("isalem@live.fr");
//            proprietaire3.setNom("marie");
//            proprietaire3.setPrenom("lopez");
//            immoService.saveProprietaire(proprietaire3);
//            // Créer un propriétaire
//           // Proprietaire proprietaire = new Proprietaire("Nom", "Prénom", "email@example.com", "02/03/1990");
//
//            // Créer un logement
//            Logement logement = new Logement();
//            logement.setSurface(125);
//            logement.setAdresse("5 mail pierres desproges");
//            logement.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement);
   /*         Article article = new Article();
            article.setCode("90TSV001");
            article.setCode_physique("209510003130000");
            article.setDate_dernier_mouvement(null);
            article.setN_Serie("BATTERIETPRO417811RE");
            article.setQuantite(10);
          //  article.setTypeArticle(typearticle3);
          //  article.setGamme(gamme);
            immoService.saveArticle(article);
            Article article3	 = new Article();
            article3.setCode("CARTESIMGPRS");
            article3.setCode_physique("8933209510003130000");
            article3.setDate_dernier_mouvement(null);
            article3.setN_Serie("CS0762691382");
            article3.setQuantite(10);
          //  article.setTypeArticle(typearticle3);
         //    article3.setTypeArticle(TypeArticle.CARTE_SIM);
            immoService.saveArticle(article3);
            Article article1	 = new Article();
            article1.setCode("CARTESIMGPRS");
            article1.setCode_physique("8933209510003130000");
            article1.setDate_dernier_mouvement(null);
            article1.setN_Serie("CS0762691382");
            article1.setQuantite(10);
           // article.setTypeArticle(typearticle3);
          //   article1.setTypeArticle(TypeArticle.CARTE_SIM);
            immoService.saveArticle(article1);  */
//            Logement logement2 = new Logement();
//            logement2.setSurface(125);
//            logement2.setAdresse("1 jeans pierre");
//            logement2.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement2);
//            Logement logement3 = new Logement();
//            logement3.setSurface(125);
//            logement3.setAdresse("1 rue Montgolfier");
//            logement3.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement3);
//            Logement logement4 = new Logement();
//            logement4.setSurface(125);
//            logement4.setAdresse("51 av. jean lolive ");
//            logement4.setDateContruction("15/05/1989");
//            immoService.saveLogement(logement4);
        	
//            immoService.mergeLogementProprietaire(logement, proprietaire);
//            immoService.mergeLogementProprietaire(logement1, proprietaire);
//            immoService.mergeLogementProprietaire(logement2, proprietaire);
//            immoService.mergeLogementLocataire(logement, locataire1);
//            immoService.mergeLogementLocataire(logement2, locataire2);           
           // Logement logement = new Logement(100.50, "Adresse du logement", "01/01/2000",locataire1,proprietaire);           
           // Attribuer le locataire et le propriétaire au logement
           // logement.setLocataire(locataire);
           // logement.setProprietaire(proprietaire);
        };
    }
	}

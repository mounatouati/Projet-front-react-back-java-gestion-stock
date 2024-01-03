package com.example.demo.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.demo.entities.Typearticle;


@RepositoryRestResource
public interface TypeArticleRepository extends JpaRepository<Typearticle, Long> {
	  Optional<Typearticle> findById (int id);
	  Optional<Typearticle> findTypearticleByType(String nom) ;
}
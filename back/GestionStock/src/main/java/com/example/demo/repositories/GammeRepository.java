package com.example.demo.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.Gamme;
@RepositoryRestResource
public interface GammeRepository extends JpaRepository<Gamme, Long> {

	  Optional<Gamme> findById (int id);
	  Optional<Gamme> findByNom(String nom) ;
	  void deleteById(int id);
}
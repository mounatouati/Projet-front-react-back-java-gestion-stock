package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entities.HistoriqueUtilisateur1;
@RepositoryRestResource
public interface HistoriqueUtilisateurRepository extends JpaRepository<HistoriqueUtilisateur1, Long> {

}

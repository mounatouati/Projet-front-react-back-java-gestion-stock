package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import com.example.demo.entities.HistoriqueUtilisateur1;
import com.example.demo.repositories.HistoriqueUtilisateurRepository;

@Service
public class HistoriqueUtilisateurService {
    private final HistoriqueUtilisateurRepository historiqueUtilisateurRepository;

    @Autowired
    public HistoriqueUtilisateurService(HistoriqueUtilisateurRepository historiqueUtilisateurRepository) {
        this.historiqueUtilisateurRepository = historiqueUtilisateurRepository;
    }

    public HistoriqueUtilisateur1 enregistrerActiviteUtilisateur(HistoriqueUtilisateur1 historiqueUtilisateur1) {
       
      return  historiqueUtilisateurRepository.save(historiqueUtilisateur1);
    }
}

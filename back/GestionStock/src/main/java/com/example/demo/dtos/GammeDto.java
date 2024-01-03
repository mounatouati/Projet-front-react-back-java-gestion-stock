package com.example.demo.dtos;

import com.example.demo.entities.Gamme;

import lombok.Builder;
import lombok.Data;


@Builder
@Data

public class GammeDto {
	  private Integer id;
	  private String nom;
	  
	  public static GammeDto fromEntity(Gamme gamme) {
	    if (gamme == null) {
	      return null;
	      // TODO throw an exception
	    }

	    return GammeDto.builder()
	        .id(gamme.getId())
	        .nom(gamme.getNom())
	        .build();
	  }

	  public static Gamme toEntity(GammeDto gammeDto) {
	    if (gammeDto == null) {
	      return null;
	      // TODO throw an exception
	    }

	    Gamme gamme = new Gamme();
	    gamme.setId(gammeDto.getId());
	    gamme.setNom(gammeDto.getNom());
	    return gamme;
	  }
}

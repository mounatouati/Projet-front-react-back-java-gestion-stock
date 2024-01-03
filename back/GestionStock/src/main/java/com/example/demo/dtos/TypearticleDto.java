package com.example.demo.dtos;

import java.util.List;

import com.example.demo.entities.Gamme;
import com.example.demo.entities.Typearticle;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TypearticleDto {
	  private Integer id;
	  private String type; 
	 
	  public static TypearticleDto fromEntity(Typearticle typearticle) {
		    if (typearticle == null) {
		      return null;
		      // TODO throw an exception
		    }

		    return TypearticleDto.builder()
		        .id(typearticle.getId())
		        .type(typearticle.getType())
		        .build();
		  }

		  public static Typearticle toEntity(TypearticleDto typearticleDto) {
		    if (typearticleDto == null) {
		      return null;
		      // TODO throw an exception
		    }

		    Typearticle typearticle = new Typearticle();
		    typearticle.setId(typearticleDto.getId());
		    typearticle.setType(typearticleDto.getType());
		    return typearticle;
		  }

}

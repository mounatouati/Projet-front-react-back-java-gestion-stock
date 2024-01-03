package com.exemple.security.services;

import java.util.ArrayList;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exemple.security.config.JwtService;
import com.exemple.security.dtos.AuthenticationRequestDto;
import com.exemple.security.dtos.AuthenticationResponseDto;
import com.exemple.security.dtos.RegisterRequestDto;
import com.exemple.security.entities.UserApp;
import com.exemple.security.repositories.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthenticationService {
	private final UserRepository repository;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	private final AccountService accountService;

	public ResponseEntity<AuthenticationResponseDto> register(RegisterRequestDto request) {
		if (repository.findByEmail(request.getEmail()).isPresent()) {
			return ResponseEntity.badRequest()
					.body(AuthenticationResponseDto.builder()
					.message("Un utilisateur avec cet e-mail existe déjà.")
					.build());
		}
		var user = UserApp.builder()
				.firstname(request.getFirstname())
				.lastname(request.getLastname())
				.email(request.getEmail())
				.roles(new ArrayList<>())
				.password(request.getPassword())
				.build();
		
		accountService.addNewUser(user);
		accountService.addRoleToUser(user, request.getRoles());
		var jwtToken = jwtService.generateToken(user);

		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Authorization", "Bearer " + jwtToken);
		
		return ResponseEntity.ok()
				.headers(responseHeaders)
				.body(AuthenticationResponseDto.builder()
				.message("Enregistrement avec succes.")
				.build());
	}

	public ResponseEntity<String> authenticate(AuthenticationRequestDto request) {
	
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		System.out.println("************" + authentication);
		
		var user = repository.findByEmail(request.getEmail())
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
		var jwtToken = jwtService.generateToken(user);
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.add("Authorization", "Bearer " + jwtToken);
		System.out.println("*****mon test*******" + responseHeaders);
		System.out.println("*****mon test*******" + jwtToken);
		
		return ResponseEntity.ok()
				.headers(responseHeaders)
				.body(jwtToken);
	}
}

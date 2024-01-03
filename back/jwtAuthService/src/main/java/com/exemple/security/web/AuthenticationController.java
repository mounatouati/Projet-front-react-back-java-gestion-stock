package com.exemple.security.web;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.exemple.security.dtos.AuthenticationRequestDto;
import com.exemple.security.dtos.RegisterRequestDto;

import com.exemple.security.services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
//	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody RegisterRequestDto request) {
		return service.register(request);
	}
//	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequestDto request) {
		return service.authenticate(request);
	}
	@GetMapping("/users/me")
	    public UserDetails getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
	        return userDetails;
	    }
	
}

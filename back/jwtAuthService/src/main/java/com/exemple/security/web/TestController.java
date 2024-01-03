package com.exemple.security.web;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.exemple.security.dtos.AuthenticationRequestDto;
// import com.exemple.security.dtos.RegisterRequestDto;
//import com.exemple.security.services.AuthenticationService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
public class TestController {

	//private final AuthenticationService service;

	@GetMapping("/test")
	public ResponseEntity<String> sayHello() {
		return ResponseEntity.ok("hello hello");
	}

}

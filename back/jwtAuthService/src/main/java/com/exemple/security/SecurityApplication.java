package com.exemple.security;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import com.exemple.security.entities.Role;
import com.exemple.security.enums.RoleName;
import com.exemple.security.services.AccountService;

@SpringBootApplication
@EnableDiscoveryClient
public class SecurityApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}
	
	@Bean
	CommandLineRunner start(AccountService accountService) {
		return args -> {
			
			//Role r1 = new Role(RoleName.ADMIN);
			accountService.addNewRole(new Role(RoleName.ADMIN));
			accountService.addNewRole(new Role(RoleName.USER));
			accountService.addNewRole(new Role(RoleName.HR));
				
		};
	}
}

package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.context.annotation.Bean;

import com.example.demo.filter.JwtAuthenticationFilter;

@SpringBootApplication
@EnableDiscoveryClient
public class CloudGatewayApplication {
	@Autowired
	//private JwtAuthenticationFilter customHeaderFilter;
	
//	@Bean
//	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder, JwtAuthenticationFilter customHeaderFilter) {
//	    return builder.routes()
//	            .route(r -> r
//	                    .path("/api/v1/immo/**") //match les requêtes avec le préfixe "/api/v1/bank/"
//	                    .filters(f -> f.filter(customHeaderFilter.apply(new JwtAuthenticationFilter.Config()))) // Applique le filtre d'en-tête personnalisé à la requête
//	                    .uri("lb://IMMO-SERVICE"))
//	            .route(r -> r
//	            		.path("/api/v1/auth/**")//match les requêtes avec le préfixe "/api/v1/auth/"
//	            		.filters(f -> f.filter(customHeaderFilter.apply(new JwtAuthenticationFilter.Config()))) // Applique le filtre d'en-tête personnalisé à la requête
//	            		.uri("lb://AUTH-SERVICE"))
//	            .build();
//	}
	
	
	@Bean
	DiscoveryClientRouteDefinitionLocator dynamicRoutes(ReactiveDiscoveryClient rdc, DiscoveryLocatorProperties dlp, JwtAuthenticationFilter customHeaderFilter) {
	    DiscoveryClientRouteDefinitionLocator locator = new DiscoveryClientRouteDefinitionLocator(rdc, dlp);
		return locator;
	}
	
	
	public static void main(String[] args) {
		SpringApplication.run(CloudGatewayApplication.class, args);
	}

}

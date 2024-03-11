package com.event.kaushik;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.event.kaushik.repository.EnableOpenApi;
@EnableOpenApi
@SpringBootApplication
public class KaushikApplication {

	public static void main(String[] args) {
		SpringApplication.run(KaushikApplication.class, args);
	}

}

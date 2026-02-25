package com.StudySync.StudySync.Backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI studySyncOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("StudySync API")
                        .description("REST API for the StudySync Student Task & Notes Manager")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Shlok Bajaj")
                                .url("https://github.com/ShlokBajaj3433")));
    }
}

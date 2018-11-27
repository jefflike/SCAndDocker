package com.jefflike.sc.sceureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * 添加注册发现注解EnableEurekaServer
 */
@SpringBootApplication
@EnableEurekaServer
public class ScEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ScEurekaApplication.class, args);
    }
}

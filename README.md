# TaskAgile

Open source task management tool built with Vue.js 3, Spring Boot 2, and MySQL 8.0+

## Local development

`src/main/resources/application-dev.properties` 파일 생성 후 다음 properties을 입력하여 `application.properties`을 override 합니다.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/task_agile?useSSL=false
spring.datasource.username=<your username>
spring.datasource.password=<your password>
```

## 명령어

- Use `mvn install` to build both the front-end and the back-end
- Use `mvn test` to run the tests of the back-end and the front-end
- Use `mvn spring-boot:run` to start the back-end
- Use `npm run serve` inside the `front-end` directory to start the front-end
- Use `java -jar target/app-0.0.1-SNAPSHOT.jar` to start the bundled application

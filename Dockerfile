## https://dev.to/lucasleon/heroku-is-not-free-anymore-so-ill-teach-you-how-to-deploy-your-spring-boot-services-to-rendercom-with-maven-and-docker-aca
#FROM openjdk:8-jdk-alpine as build
#WORKDIR /workspace/app
#COPY mvnw .
#COPY .mvn .mvn
#COPY pom.xml .
#COPY src src
#RUN chmod +x ./mvnw
#RUN ./mvnw install -DskipTests
#RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)
#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ARG DEPENDENCY=/workspace/app/target/dependency
#COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
#COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
#COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
#ENTRYPOINT ["java","-cp","app:app/lib/*","com.github.curriculeon.DemoApplication"]
# Build Stage
# Build Stage
FROM amazoncorretto:17-alpine as build
WORKDIR /workspace/app

# Copy Maven Wrapper and project files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make the Maven wrapper executable and install dependencies
RUN chmod +x ./mvnw
RUN ./mvnw clean install -DskipTests

# Final Stage
FROM amazoncorretto:17-alpine
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /workspace/app/target/*.jar app.jar

# Create a non-root user for security (optional but recommended)
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Entry point for running the application
ENTRYPOINT ["java", "-jar", "app.jar"]
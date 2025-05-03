FROM openjdk:21-jdk-slim

COPY Backend/target/Pokemon-0.0.1-SNAPSHOT.jar Pokemon-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "Pokemon-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080

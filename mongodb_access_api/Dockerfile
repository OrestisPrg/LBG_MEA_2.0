FROM openjdk:18-ea-11-alpine3.15

RUN mkdir /home/mongo_app

COPY ./target/mongodbtest.jar /home/mongo_app/mongodbtest.jar

EXPOSE 27018

ENTRYPOINT java -jar /home/mongo_app/mongodbtest.jar


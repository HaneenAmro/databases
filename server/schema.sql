DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
--   /* Describe your table here.*/

  id INT NOT NULL AUTO_INCREMENT,
  userid INT,
  msg TEXT,
  roomname TEXT,
  PRIMARY KEY (ID)

);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (

id INT NOT NULL AUTO_INCREMENT,
username CHAR(30),
PRIMARY KEY (ID)


);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


DROP DATABASE IF EXISTS recipe_db;
CREATE DATABASE recipe_db;

USE recipe_db;

CREATE TABLE user {
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username NOT NULL VARCHAR 40,
  pass_word NOT NULL VARCHAR 30,
  unique(username)

};

CREATE TABLE blog_post {
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR 50,
};
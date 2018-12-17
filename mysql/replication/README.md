On master:
```
CREATE USER repl_user;

GRANT REPLICATION SLAVE ON *.* TO repl_user IDENTIFIED BY 'repl_user';
```

On slave:
```
CHANGE MASTER TO
   MASTER_HOST = 'master',
   MASTER_PORT = 3306,
   MASTER_USER = 'repl_user',
   MASTER_PASSWORD = 'repl_user';

START SLAVE;
```

---
Test

On master:
```
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    status TINYINT NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

INSERT INTO books
VALUES (1, "Nirvana in Fire", 1);

INSERT INTO books
VALUES (2, "Nobody returns", 0);

INSERT INTO books
VALUES (3, "Crime Scene Season 2", 1);
```

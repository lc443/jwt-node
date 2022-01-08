

CREATE TABLE users (
    user_id SERIAL,
    username TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL
);

SELECT * FROM users
INSERT INTO USERS (username, user_email, user_password) VALUES ('lc443', 'email@email.com', 'password')
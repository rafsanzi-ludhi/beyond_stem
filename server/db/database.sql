DROP TABLE IF EXISTS user_info;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS history_item;
DROP TABLE IF EXISTS user_progress;

CREATE TABLE history_item(
    id INT GENERATED ALWAYS AS IDENTITY,
    fact VARCHAR(500) NOT NULL,
    fact_img VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
);

CREATE TABLE category(
    category_id INT GENERATED ALWAYS AS IDENTITY,
    card_id INT NOT NULL,
    PRIMARY KEY(category_id)
);

CREATE TABLE user_info (
    id INT GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    school VARCHAR(50),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE user_progress(
    card_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    PRIMARY KEY(card_id),
);


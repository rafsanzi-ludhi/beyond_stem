TRUNCATE history_item RESTART IDENTITY;
TRUNCATE user_account RESTART IDENTITY


INSERT INTO history_item (fact, fact_img) 
VALUES
  ('fact1', 'img1'),
  ('fact2', 'img2'),
  ('fact3', 'img3');

INSERT INTO user_account (username, password)
VALUES
    ('user1', 'pass1')
    ('user2', 'pass2')
    ('user3', 'pass3')
    
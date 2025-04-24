TRUNCATE history_item RESTART IDENTITY;

INSERT INTO history_item (id, fact, fact_img) 
VALUES
  (1,'fact1', 'img1'),
  (2,'fact2', 'img2'),
  (3,'fact3', 'img3');

    
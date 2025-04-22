DROP TABLE IF EXISTS user_progress;
DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS history_item;

CREATE TABLE history_item(
    id INT,
    fact VARCHAR(500) NOT NULL,
    fact_img VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE category(
    category_id INT GENERATED ALWAYS AS IDENTITY,
    card_id INT NOT NULL,
    PRIMARY KEY(category_id)
);

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE user_progress(
    card_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    PRIMARY KEY(card_id)
);

INSERT INTO history_item VALUES 
    (1, 'The Leaning Tower of Pisa was never straight. Known for its four-degree lean, this Italian tower was constructed in the 12th century. When construction on the second story started, the tower started to lean due to the unstable ground it was built on.', ''),
    (2, 'The University of Oxford is older than the Aztec Empire. First opened its doors to students all the way back in 1096. By comparison, the Aztec Empire is said to have originated with the founding of the city Texcoco, which occurred in the year 1325.', ''),
    (3, 'The most famous female serial killer was a Hungarian Countess, Elizabeth Báthory de Ecsed. She was accused of torturing and killing over 650 young women. Most of them were between the ages of 10 and 14.', ''),
    (4, 'Rum was first introduced to Jamaica by Christopher Columbus in 1494. 1665 when Jamaica became a British colony after Spanish rule, it became a hub for rum production. 1665 when Jamaica became a British colony after Spanish rule', ''),
    (5, 'Russia ran out of vodka celebrating the end of World War II! When the long war ended, street parties engulfed the Soviet Union, lasting for days—until all of the nation''s vodka reserves ran out a mere 22 hours after the partying started.', ''),
    (6, 'Arsenal started as Dial Square FC in 1886, founded by workers from the Royal Arsenal Armament Factory in Woolwich. They were the first South London club to join the Football League, reaching the First Division in 1904.', ''),
    (7, 'Tottenham Hotspur Football Club, commonly known as Spurs, was founded on September 5, 1882 in North London. The club''s journey in competitive football inevitably began with a 0:2 loss against a local club called the Radicals.', ''),
    (8, 'In 1931, a 19-year-old British aristocrat named John Scott-Ellis was driving in Munich and almost hit Adolf Hitler. Hitler only suffered minor bruises. Scott-Ellis could have changed the history of the world.', ''),
    (9, 'Suffragist Flora Murray and Louisa Garrett Anderson, both doctors, attempted to join the armed forces medical services in 1914 but were not allowed. So they set up an all-female independent hospital to treat soldiers. It became the best in the UK.', ''),
    (10, 'Alexander Graham Bell, the inventor of the first practical telephone in 1876, decided that the correct salutation on answering should be "Ahoy."', ''),
    (11, 'In 536 AD a series of volcanic eruptions sprayed so much soot into the atmosphere that the temperature of Europe dropped by 2.5 degrees Celsius. This is a drop of halfway to the temperature of the Last Ice Age in one year.', ''),
    (12, 'Scottish medium Helen Duncan was one of the last people to be imprisoned under the Witchcraft Act of 1735 - in 1943, on the grounds of fraudulent spiritual activity.', ''),
    (13, 'In 1865, a train carrying Charles Dickens crossed a viaduct which collapsed and fell into the river. He escaped with the manuscript of the novel Our Mutual Friend.', ''),
    (14, '46 BC technically lasted 445 days, making it the longest "year" in history. It included an additional two leap months by order of Roman emperor Julius Caesar. Caesar''s aim was to make his newly formed Julian Calendar match-up with the seasonal year.', ''),
    (15, 'After signing 1807''s Treaties of Tilsit, Napoleon Bonaparte suggested a rabbit hunt. Thousands of rabbits were collected and released from cages. Instead of turning to flee, the bunnies ran up the emperor''s legs and jacket, leading him to retreat.', ''),
    (16, 'The Anglo-Zanzibar War of 1896 is widely believed to be the shortest war in history. This conflict conducted between the U.K. and the Zanzibar Sultanate, lasted no longer than 38 minutes on August 27.', ''),
    (17, 'Jockey Frank Hayes won a 1923 race at New York''s Belmont Park despite being dead. Hayes had a heart attack shortly after the start, but his body remained in the saddle until his horse crossed the line for a 20-1 outsider victory.', ''),
    (18, 'July 1969''s historic NASA Apollo 11 mission resulted in humans walking on the Moon for the first time. And after Buzz Aldrin''s urine collection sheath in his spacesuit broke, the astronaut became the first man to have a wee on the Moon.', ''),
    (19, 'The Portuguese royal court transferred from Lisbon to the Portuguese colony of Brazil in a strategic retreat, just days before Napoleonic forces invaded Portugal on 1 December 1807.', '');
    
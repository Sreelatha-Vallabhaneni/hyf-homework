/*CREATE DATABASE MealSharing;
SET NAMES utf8mb4;
USE MealSharing;

CREATE  TABLE meal (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
`when` DATETIME NOT NULL,
max_reservations INT(10),
price DECIMAL NOT NULL,
created_date DATE NOT NULL
);
CREATE TABLE reservation (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
number_of_guests INT(10) UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATE NOT NULL,
FOREIGN KEY(meal_id) REFERENCES meal (id) ON DELETE CASCADE
);
CREATE TABLE review (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT(10) UNSIGNED NOT NULL,
stars INT(10) UNSIGNED,
created_date DATE NOT NULL,
FOREIGN KEY(meal_id) REFERENCES meal (id) ON DELETE CASCADE
);*/

--  MEAL
/*INSERT INTO Meal(title, description, location, `When`, max_reservations, price, created_date)
VALUES ('Pizza', 'Pizza with cheese', 'Odense', '01.09.2019', 3, '5.55', now());
INSERT INTO Meal(title,description, location, `When`, max_reservations, price, created_date) 
VALUES ('Soup', 'Tomato soup', 'Odense', '30.08.2019', 2, '2', '2.10.2019');
INSERT INTO Meal(title, description, location, `When`, max_reservations, price, created_date) 
VALUES('pizza', 'chicken pizza', 'taastrup', '11.8.2019', 4, '60', '27.11.2019');
INSERT INTO Meal(title,description, location, `When`, max_reservations, price, created_date) 
VALUES ('Soup', 'Tomato soup', 'Odense', '30.08.2019', 42, '2', '2.10.2029');
INSERT INTO Meal(title,description, location, `When`, max_reservations, price, created_date) 
VALUES ('Dhum biryani and Rød grød med fløde', 'Tomato soup', 'høetaastrup', '2029-08-30', 59, '2', '2019-10-2');*/
/*-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO Meal(title, description, location, `when`, max_reservations, price, created_date) 
VALUES('pasta', 'chicken pasta', 'copenhagen', '9.12.2019', 4, '160.50', '2.11.2019');
-- Get a meal with any id, fx 1
SELECT * FROM Meal WHERE id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal SET title = 'biryani', location = 'tivoli'
WHERE id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id = 3;*/


-- Reservation
/*INSERT INTO reservation (number_of_guests, meal_id, created_date) VALUES (4, 1, "2019-11-17");
INSERT INTO reservation (number_of_guests, meal_id, created_date) VALUES (3, 4, "2019-10-10");
INSERT INTO reservation (number_of_guests, meal_id, created_date) VALUES (5, 3, "2019-07-30");
INSERT INTO reservation (number_of_guests, meal_id, created_date) VALUES (2, 2, "2019-9-28");*/
-- Get all reservations
 -- SELECT * FROM reservation;
-- Add a new reservation
-- INSERT INTO reservation (number_of_guests, meal_id, created_date) VALUES (8, 9, "2020-08-17");
-- Get a reservation with any id, fx 1
 -- SELECT * FROM reservation WHERE id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE reservation SET number_of_guests = 11, meal_id = 8 WHERE id = 1;
-- Delete a reservation with any id, fx 1
-- DELETE FROM reservation WHERE id = 6;

-- Review
/*INSERT INTO review (title, description, meal_id, Stars, created_date) 
VALUES ('best dinner', 'I like it very much', 4, 5, "2019-9-28");
INSERT INTO review (title, description, meal_id, Stars, created_date) 
VALUES ('Average dinner', 'I like it very much', 3, 5, "2019-11-8");
INSERT INTO review (title, description, meal_id, Stars, created_date) 
VALUES ('Excellent dinner', 'I like it very much', 2, 5, "2019-1-28");
INSERT INTO review (title, description, meal_id, Stars, created_date) 
VALUES ('Worst dinner', 'I do not like it', 1, 1, "2019-10-2");*/

-- Get all reviews
-- SELECT * FROM review;
-- Add a new review
/*INSERT INTO review (title, description, meal_id, Stars, created_date) 
VALUES ('nice dinner', 'I like it', 1, 4, "2019-1-2");*/
-- Get a review with any id, fx 1
-- SELECT * FROM review WHERE id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
-- UPDATE review SET title = 'nice', stars = 3 WHERE id = 1;
-- Delete a review with any id, fx 1
-- DELETE FROM review WHERE id = 5;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
-- SELECT * FROM Meal WHERE Price < 4;
-- Get meals that still has available reservations
/*SELECT meal.title, meal.max_reservations, reservation.number_of_guests FROM meal JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.max_reservations >  reservation.number_of_guests;*/
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- SELECT * FROM meal WHERE title LIKE '%Rød grød med fløde%'; 
-- Get meals that has been created between two dates
/*SELECT * FROM meal
WHERE created_date BETWEEN '2019-01-5' AND '2030-10-20';*/
-- Get only specific number of meals fx return only 5 meals
-- SELECT * FROM Meal LIMIT 5;
-- Get the meals that have good reviews
/*SELECT meal.title, meal.location, review.stars AS star_rating FROM meal 
JOIN review ON meal.id = review.meal_id WHERE stars > 3;*/
-- Get reservations for a specific meal sorted by created_date
/*SELECT meal.title, reservation.created_date, reservation.number_of_guests
FROM meal JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.title LIKE '%soup%'
ORDER BY reservation.created_date;*/

-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS stars FROM meal JOIN review ON meal.id = review.meal_id 
GROUP BY meal.title
ORDER BY stars DESC;
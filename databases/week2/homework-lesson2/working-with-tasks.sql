use hyf_db_lesson1;

-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
/*INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES (
'Doinggggggg DB2 WEEK2 homework', 
'Adding task to task table', 
NOW(), NOW(), 
'2019-11-22 12:00:00', 2, 5
);*/

-- Change the title of a task with these attributes: taskID, newTitle
-- UPDATE task SET title = 'newTitle' WHERE id = 39;

-- Change the task due date with these attributes: taskID, newDueDate
-- UPDATE task SET due_date = '2019-11-19 12:00:00' WHERE id = 42;

-- Change the task status with these attributes: taskID, newStatus
-- UPDATE task SET status_id = 1 WHERE id = 39;

-- Mark a task as complete with this attribute: taskID
-- UPDATE task SET status_id = 3 WHERE id = 38;

-- Delete task with this attribute: taskID
-- DELETE FROM task WHERE id = 41;

 

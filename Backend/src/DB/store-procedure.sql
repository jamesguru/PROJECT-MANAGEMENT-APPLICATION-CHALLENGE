--MY PROCEDURE 

-

-- DEVELOPERS

CREATE PROCEDURE getDevelopers
AS
    SELECT * FROM Developers
GO;

-- ADD DEVELOPERS

CREATE PROCEDURE addDevelopers @fullname NVARCHAR(100), @email NVARCHAR(100), @password NVARCHAR(100)

AS

    INSERT INTO Developers(fullname,email,password)

    VALUES (@fullname,@email,@password)


GO

-- GET A DEVELOPER

CREATE PROCEDURE getDeveloper (@email VARCHAR(200))

AS

   SELECT * FROM Developers WHERE email = @email

-- GET ALL DEVELOPERS


CREATE PROCEDURE getAllDevelopers 

    AS
    BEGIN

    SELECT * FROM Developers

GO

-- Login user

CREATE PROCEDURE loginUser @email NVARCHAR(100), @password NVARCHAR(100)

AS

SELECT * FROM Developers WHERE email=@email AND password=@password

GO

-- ASSIGN TASKS / UPDATE DEVELOPERS

CREATE PROCEDURE updateDeveloper @id int,@assigned NVARCHAR(100)

AS 
 
 UPDATE Developers SET assigned= @assigned  WHERE developer_id = @id

 GO


 --DELETE DEVELOPER 

 CREATE PROCEDURE deleteDeveloper @id int

 AS


 DELETE FROM Developers WHERE developer_id = @id



-- TASKS

-- CREATE TABLE

CREATE TABLE Tasks(

    id int IDENTITY(1,1),
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    date VARCHAR(50) NOT NULL,
    task_id int REFERENCES Developers(developer_id) DEFAULT 0
)

-- GET ALL TASKS

CREATE PROCEDURE getAllTasks 

AS
 
 SELECT * FROM Tasks

GO
-- INSERT TASK


CREATE PROCEDURE addTask @title NVARCHAR(100),@description NVARCHAR(100),@date NVARCHAR(100)

AS

    INSERT INTO Tasks(title,description,date)

    VALUES(@title, @description,@date)

GO

-- ASSIGN TASK TO A DVELOPER

CREATE PROCEDURE assignTask @id int, @dev_id int, @assigned NVARCHAR
AS

UPDATE Tasks SET task_id = @dev_id, assigned=@assigned WHERE id = @id

GO

--UPDATE TASK 

CREATE PROCEDURE updateTask @id int, @completed NVARCHAR

AS 

BEGIN

    UPDATE Tasks SET completed=@completed WHERE task_id = @id

GO

-- INNER JOIN TASK AND DEVELOPER 



create PROCEDURE getTaskAssignedToDeveloper @id int

AS

    SELECT *
    FROM Developers
    INNER JOIN Tasks
    ON @id= Tasks.id;
GO



-- GET TASK ASSIGNED TO A DEVELOPER


create PROCEDURE getTaskAssignedToDeveloper @id int

AS

    SELECT *
    FROM Tasks
    WHERE task_id = @id;
GO




-- DELETE TASK 


CREATE PROCEDURE deleteTask @id INT

AS
    DELETE FROM Tasks WHERE id = @id

GO

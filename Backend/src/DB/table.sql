CREATE TABLE Developers(

    developer_id int IDENTITY(1,1) PRIMARY KEY,
    fullname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    assigned VARCHAR(100) NOT NULL DEFAULT 'not assigned',
    role VARCHAR(100) DEFAULT 'developer' NOT NULL

)



CREATE TABLE Tasks(

    id int IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    date VARCHAR(50) NOT NULL,
    completed VARCHAR(100) DEFAULT 'pending',

    assigned VARCHAR(100) NOT NULL DEFAULT 'not assigned',
    
    task_id int REFERENCES Developers(developer_id) DEFAULT NULL
)
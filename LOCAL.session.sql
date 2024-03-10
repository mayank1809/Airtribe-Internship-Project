-- CREATE TABLE Instructors (
--     instructor_id INTEGER PRIMARY KEY,
--     name TEXT,
--     email TEXT
-- );
select * from leads;
-- select * from courses;
-- select * from instructors;
-- -- create database Data;
-- use Data;

-- CREATE TABLE Courses (
--     course_id INTEGER PRIMARY KEY,
--     instructor_id INTEGER,
--     name TEXT,
--     max_seats INTEGER,
--     start_date DATE,
--     FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
-- );


-- SHOW TABLES LIKE 'Courses';


-- Recreate the Leads table with lead_id as the primary key
-- CREATE TABLE Leads (
--     lead_id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     course_id INTEGER,
--     name TEXT,
--     email TEXT,
--     phone TEXT,
--     linkedin TEXT,
--     status VARCHAR(255) DEFAULT 'Pending',
--     comments TEXT,
--     FOREIGN KEY (course_id) REFERENCES Courses(course_id)
-- );



-- CREATE TABLE Comments (
--     comment_id INTEGER PRIMARY KEY,
--     lead_id INTEGER,
--     comment TEXT,
--     FOREIGN KEY (lead_id) REFERENCES Leads(lead_id)
-- );

-- ALTER TABLE Leads DROP FOREIGN KEY leads_ibfk_1;
-- ALTER TABLE Leads ADD CONSTRAINT leads_ibfk_1 FOREIGN KEY (course_id) REFERENCES Courses(course_id);

-- ALTER TABLE Leads DROP FOREIGN KEY leads_ibfk_1;

-- ALTER TABLE Leads ADD CONSTRAINT leads_fk_course_id FOREIGN KEY (course_id) REFERENCES Courses(course_id);

-- -- ALTER TABLE Leads MODIFY COLUMN lead_id INTEGER AUTO_INCREMENT PRIMARY KEY;

-- -- DROP TABLE IF EXISTS Leads;
-- ALTER TABLE Comments DROP FOREIGN KEY comments_ibfk_1;
-- DROP TABLE Leads;


-- INSERT INTO Leads (course_id, name, email, phone, linkedin, status, comments) VALUES
--     (1, 'Alice Johnson', 'alice.johnson@example.com', '123-456-7890', 'linkedin.com/in/alicejohnson', 'Pending', 'Interested in learning more about the course.'),
--     (2, 'Bob Smith', 'bob.smith@example.com', '987-654-3210', 'linkedin.com/in/bobsmith', 'Pending', 'Excited to join the course!'),
--     (3, 'Charlie Brown', 'charlie.brown@example.com', '555-123-4567', 'linkedin.com/in/charliebrown', 'Pending', 'Looking forward to the course.'),
--     (4, 'Diana Johnson', 'diana.johnson@example.com', '111-222-3333', 'linkedin.com/in/dianajohnson', 'Pending', 'Hope to enhance my skills with this course.'),
--     (5, 'Eva Davis', 'eva.davis@example.com', '444-555-6666', 'linkedin.com/in/evadavis', 'Pending', 'Excited to start learning!'),
--     (6, 'Frank White', 'frank.white@example.com', '777-888-9999', 'linkedin.com/in/frankwhite', 'Pending', 'Looking for new opportunities.'),
--     (7, 'Grace Lee', 'grace.lee@example.com', '222-333-4444', 'linkedin.com/in/gracelee', 'Pending', 'Interested in professional development.'),
--     (8, 'Henry Garcia', 'henry.garcia@example.com', '666-777-8888', 'linkedin.com/in/henrygarcia', 'Pending', 'Hoping to gain valuable skills.'),
--     (9, 'Ivy Martinez', 'ivy.martinez@example.com', '999-000-1111', 'linkedin.com/in/ivymartinez', 'Pending', 'Looking forward to this course.'),
--     (10, 'Jack Robinson', 'jack.robinson@example.com', '333-444-5555', 'linkedin.com/in/jackrobinson', 'Pending', 'Excited about this opportunity.'),
--     (11, 'Karen Young', 'karen.young@example.com', '000-111-2222', 'linkedin.com/in/karenyoung', 'Pending', 'Ready to learn!'),
--     (12, 'Lucas Taylor', 'lucas.taylor@example.com', '888-999-0000', 'linkedin.com/in/lucastaylor', 'Pending', 'Looking to improve my skills.'),
--     (13, 'Maria Lopez', 'maria.lopez@example.com', '444-555-6666', 'linkedin.com/in/marialopez', 'Pending', 'Excited to start this course.'),
--     (14, 'Nancy Adams', 'nancy.adams@example.com', '111-222-3333', 'linkedin.com/in/nancyadams', 'Pending', 'Hope to gain valuable insights.'),
--     (15, 'Oliver Kim', 'oliver.kim@example.com', '555-666-7777', 'linkedin.com/in/oliverkim', 'Pending', 'Ready to dive into this course.'),
--     (16, 'Patricia Evans', 'patricia.evans@example.com', '222-333-4444', 'linkedin.com/in/patriciaevans', 'Pending', 'Looking forward to learning.'),
--     (17, 'Quinn Carter', 'quinn.carter@example.com', '777-888-9999', 'linkedin.com/in/quinncarter', 'Pending', 'Excited to join the course!'),
--     (18, 'Ryan Phillips', 'ryan.phillips@example.com', '333-444-5555', 'linkedin.com/in/ryanphillips', 'Pending', 'Ready to improve my skills.'),
--     (19, 'Samantha Hill', 'samantha.hill@example.com', '999-000-1111', 'linkedin.com/in/samanthahill', 'Pending', 'Looking forward to this course.'),
--     (20, 'Tyler Scott', 'tyler.scott@example.com', '000-111-2222', 'linkedin.com/in/tylerscott', 'Pending', 'Hope to gain new knowledge.');



-- -- INSERT INTO Courses (instructor_id, name, max_seats, start_date) VALUES
-- --     (1, 'Introduction to Programming', 50, '2024-03-01'),
-- --     (2, 'Web Development Fundamentals', 40, '2024-03-05'),
-- --     (3, 'Database Design and SQL', 30, '2024-03-10'),
-- --     (4, 'Data Structures and Algorithms', 35, '2024-03-15'),
-- --     (5, 'Machine Learning Basics', 25, '2024-03-20'),
-- --     (6, 'Mobile App Development', 30, '2024-03-25'),
-- --     (7, 'Cybersecurity Fundamentals', 20, '2024-03-30'),
-- --     (8, 'Digital Marketing Essentials', 40, '2024-04-01'),
-- --     (9, 'Graphic Design Fundamentals', 30, '2024-04-05'),
-- --     (10, 'UI/UX Design Principles', 35, '2024-04-10'),
-- --     (11, 'Project Management Basics', 25, '2024-04-15'),
-- --     (12, 'Financial Accounting Principles', 30, '2024-04-20'),
-- --     (13, 'Business Communication Skills', 40, '2024-04-25'),
-- --     (14, 'Leadership and Management', 20, '2024-04-30'),
-- --     (15, 'Public Speaking Mastery', 35, '2024-05-01'),
-- --     (16, 'Artificial Intelligence Concepts', 30, '2024-05-05'),
-- --     (17, 'Blockchain Fundamentals', 25, '2024-05-10'),
-- --     (18, 'Cloud Computing Essentials', 30, '2024-05-15'),
-- --     (19, 'Digital Photography Basics', 40, '2024-05-20'),
-- --     (20, 'Video Production Techniques', 20, '2024-05-25');

-- -- INSERT INTO Instructors (instructor_id, name, email) VALUES
-- --     (1, 'John Doe', 'john.doe@example.com'),
-- --     (2, 'Jane Smith', 'jane.smith@example.com'),
-- --     (3, 'Michael Johnson', 'michael.johnson@example.com'),
-- --     (4, 'Emily Davis', 'emily.davis@example.com'),
-- --     (5, 'Christopher Brown', 'christopher.brown@example.com'),
-- --     (6, 'Jessica Wilson', 'jessica.wilson@example.com'),
-- --     (7, 'Matthew Taylor', 'matthew.taylor@example.com'),
-- --     (8, 'Amanda Martinez', 'amanda.martinez@example.com'),
-- --     (9, 'David Anderson', 'david.anderson@example.com'),
-- --     (10, 'Ashley Thomas', 'ashley.thomas@example.com'),
-- --     (11, 'James Hernandez', 'james.hernandez@example.com'),
-- --     (12, 'Sarah Mitchell', 'sarah.mitchell@example.com'),
-- --     (13, 'Robert Perez', 'robert.perez@example.com'),
-- --     (14, 'Jennifer Gonzalez', 'jennifer.gonzalez@example.com'),
-- --     (15, 'Daniel Baker', 'daniel.baker@example.com'),
-- --     (16, 'Michelle Lee', 'michelle.lee@example.com'),
-- --     (17, 'William Carter', 'william.carter@example.com'),
-- --     (18, 'Lauren Lewis', 'lauren.lewis@example.com'),
-- --     (19, 'Richard Hall', 'richard.hall@example.com'),
-- --     (20, 'Mary King', 'mary.king@example.com');
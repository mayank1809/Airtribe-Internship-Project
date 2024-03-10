-- CREATE TABLE Instructors (
--     instructor_id INTEGER PRIMARY KEY,
--     name TEXT,
--     email TEXT
-- );

CREATE TABLE Courses (
    course_id INTEGER PRIMARY KEY,
    instructor_id INTEGER,
    name TEXT,
    max_seats INTEGER,
    start_date DATE,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

CREATE TABLE Leads (
    lead_id INTEGER PRIMARY KEY,
    course_id INTEGER,
    name TEXT,
    email TEXT,
    phone TEXT,
    linkedin TEXT,
    status TEXT DEFAULT 'Pending',
    comments TEXT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Comments (
    comment_id INTEGER PRIMARY KEY,
    lead_id INTEGER,
    comment TEXT,
    FOREIGN KEY (lead_id) REFERENCES Leads(lead_id)
);


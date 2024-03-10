// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ambica123@',
  database: 'Data'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Database connection successful');
});


// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create course API
app.post('/courses', (req, res) => {
    // Extract course data from request body
    const { name, instructor_id, max_seats, start_date } = req.body;
    // Execute SQL query to insert new course into the database
    db.query('INSERT INTO Courses (name, instructor_id, max_seats, start_date) VALUES (?, ?, ?, ?)', 
        [name, instructor_id, max_seats, start_date],
        (err, result) => {
            if (err) {
                console.error('Error creating course:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'Course created successfully' });
            }
        }
    );
});

// Update course details API
app.put('/courses/:id', (req, res) => {
    // Extract course data from request body
    const courseId = req.params.id;
    const { name, instructor_id, max_seats, start_date } = req.body;
    // Execute SQL query to update course details in the database
    db.query('UPDATE Courses SET name=?, instructor_id=?, max_seats=?, start_date=? WHERE course_id=?', 
        [name, instructor_id, max_seats, start_date, courseId],
        (err, result) => {
            if (err) {
                console.error('Error updating course:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'Course updated successfully' });
            }
        }
    );
});

// Course registration API
app.post('/register', (req, res) => {
    // Extract lead data from request body
    const { course_id, name, email, phone, linkedin } = req.body;
    // Execute SQL query to insert new lead into the database
    db.query('INSERT INTO Leads (course_id, name, email, phone, linkedin, status) VALUES (?, ?, ?, ?, ?, ?)', 
        [course_id, name, email, phone, linkedin, 'Pending'],
        (err, result) => {
            if (err) {
                console.error('Error registering for course:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'Registered for course successfully' });
            }
        }
    );
});

// Lead update API
app.put('/leads/:id', (req, res) => {
    // Extract lead data from request body
    const leadId = req.params.id;
    const { name, email, phone, linkedin, status } = req.body;
    // Execute SQL query to update lead details in the database
    db.query('UPDATE Leads SET name=?, email=?, phone=?, linkedin=?, status=? WHERE lead_id=?', 
        [name, email, phone, linkedin, status, leadId],
        (err, result) => {
            if (err) {
                console.error('Error updating lead:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'Lead updated successfully' });
            }
        }
    );
});

// Lead search API
app.get('/leads', (req, res) => {
    // Extract search term from query parameters
    const searchTerm = req.query.q;
    // Execute SQL query to search for leads in the database
    db.query('SELECT * FROM Leads WHERE name LIKE ? OR email LIKE ?', [`%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error('Error searching for leads:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Add comment API
app.post('/comments', (req, res) => {
    // Extract comment data from request body
    const { lead_id, comment } = req.body;
    // Execute SQL query to add comment to lead in the database
    db.query('SELECT comments FROM Leads WHERE lead_id=?', [lead_id], (err, results) => {
        if (err) {
            console.error('Error fetching lead comments:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            let comments = results[0].comments || '';
            comments += (comments ? '\n' : '') + comment;
            db.query('UPDATE Leads SET comments=? WHERE lead_id=?', [comments, lead_id], (err, result) => {
                if (err) {
                    console.error('Error adding comment:', err);
                    res.status(500).json({ message: 'Internal server error' });
                } else {
                    res.status(200).json({ message: 'Comment added successfully' });
                }
            });
        }
    });
});

// Set up the server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





// Define courses and leads data (in-memory for simplicity)
let courses = [];
let leads = [];

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    // Route the requests based on the URL path
    switch (path) {
        case '/create-course':
            createCourse(req, res);
            break;
        case '/update-course':
            updateCourse(req, res);
            break;
        case '/register-course':
            registerCourse(req, res);
            break;
        case '/update-lead':
            updateLead(req, res);
            break;
        case '/search-lead':
            searchLead(req, res);
            break;
        case '/add-comment':
            addComment(req, res);
            break;
        default:
            // Return 404 for unknown routes
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

// Set up the server to listen on port 3000
server.listen(3001, () => {
    console.log('Server is running on port 3000');
});

// Function to create a new course
function createCourse(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const courseData = querystring.parse(body);
        // Assuming your MySQL table for courses has fields: name, instructor_id, max_seats, start_date
        db.query('INSERT INTO Courses (name, instructor_id, max_seats, start_date) VALUES (?, ?, ?, ?)', 
            [courseData.name, courseData.instructor_id, courseData.max_seats, courseData.start_date],
            (err, result) => {
                if (err) {
                    console.error('Error creating course:', err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Internal server error' }));
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Course created successfully' }));
                }
            }
        );
    });
}

// Function to update course details
function updateCourse(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const courseData = querystring.parse(body);
        const courseId = courseData.id;
        // Assuming your MySQL table for courses has fields: name, instructor_id, max_seats, start_date
        db.query('UPDATE Courses SET name=?, instructor_id=?, max_seats=?, start_date=? WHERE course_id=?', 
            [courseData.name, courseData.instructor_id, courseData.max_seats, courseData.start_date, courseId],
            (err, result) => {
                if (err) {
                    console.error('Error updating course:', err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Internal server error' }));
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Course updated successfully' }));
                }
            }
        );
    });
}

// Rest of your functions (registerCourse, updateLead, searchLead, addComment) would follow a similar pattern, executing appropriate SQL queries and handling responses.
// Function to register for a course
function registerCourse(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const leadData = querystring.parse(body);
        // Assuming your MySQL table for leads has fields: course_id, name, email, phone, linkedin, status, comments
        db.query('INSERT INTO Leads (course_id, name, email, phone, linkedin, status) VALUES (?, ?, ?, ?, ?, ?)', 
            [leadData.course_id, leadData.name, leadData.email, leadData.phone, leadData.linkedin, leadData.status || 'Pending'],
            (err, result) => {
                if (err) {
                    console.error('Error registering for course:', err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Internal server error' }));
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Registered for course successfully' }));
                }
            }
        );
    });
}

// Function to update lead status
function updateLead(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const leadData = querystring.parse(body);
        const leadId = leadData.lead_id;
        // Assuming your MySQL table for leads has fields: name, email, phone, linkedin, status, comments
        db.query('UPDATE Leads SET name=?, email=?, phone=?, linkedin=?, status=? WHERE lead_id=?', 
            [leadData.name, leadData.email, leadData.phone, leadData.linkedin, leadData.status, leadId],
            (err, result) => {
                if (err) {
                    console.error('Error updating lead:', err);
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Internal server error' }));
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify({ message: 'Lead updated successfully' }));
                }
            }
        );
    });
}

// Function to search leads by name or email
function searchLead(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    const searchTerm = queryParams.q;

    // Assuming your MySQL table for leads has fields: name, email, phone, linkedin, status, comments
    db.query('SELECT * FROM Leads WHERE name LIKE ? OR email LIKE ?', [`%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error('Error searching for leads:', err);
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'Internal server error' }));
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        }
    });
}

// Function to add comment against a lead
function addComment(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const commentData = querystring.parse(body);
        const leadId = commentData.lead_id;
        // Assuming your MySQL table for leads has a field: comments
        db.query('SELECT comments FROM Leads WHERE lead_id=?', [leadId], (err, results) => {
            if (err) {
                console.error('Error fetching lead comments:', err);
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'Internal server error' }));
            } else {
                let comments = results[0].comments || '';
                comments += (comments ? '\n' : '') + commentData.comment;
                db.query('UPDATE Leads SET comments=? WHERE lead_id=?', [comments, leadId], (err, result) => {
                    if (err) {
                        console.error('Error adding comment:', err);
                        res.writeHead(500, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({ message: 'Internal server error' }));
                    } else {
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify({ message: 'Comment added successfully' }));
                    }
                });
            }
        });
    });
}



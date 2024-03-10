## Airtribe-Internship-Project

# Problem Statement
Design database and APIs for application-based courses on Airtribe.

# Database Relations
There are multiple instructors on Airtribe.
Every instructor can start multiple courses.
Multiple learners can apply for a course using an application form (Leads).
Instructors can add comments against every lead.
# Database Design
Design the above relationships on any SQL database.

# Implemented APIs
Create Course API:

Endpoint: POST /courses
Description: Allows the creation of a new course with details such as name, instructor ID, maximum seats, and start date.

Update Course Details API:

Endpoint: PUT /courses/:id
Description: Updates the details of an existing course identified by its ID. Details such as name, maximum seats, and start date can be modifiedCourse 

Registration API:

Endpoint: POST /register
Description: Allows a user to apply for a course by providing their name, email, phone number, and LinkedIn profile. This creates a new lead entry.

Lead Update API:

Endpoint: PUT /leads/:id
Description: Enables an instructor to change the status of a lead (Accept / Reject / Waitlist). The lead is identified by its ID.

Lead Search API:

Endpoint: GET /leads?q={searchTerm}
Description: Allows instructors to search for leads by name or email. The search term is provided as a query parameter.

Add Comment API:

Endpoint: POST /comments
Description: Enables instructors to add comments against a lead. The comment is associated with a lead identified by its ID.

# Technologies Used
Node.js
Express.js
MySQL
Usage

# Implemented APIs
Create Course API: POST /courses
Update Course Details API: PUT /courses/:id
Course Registration API: POST /register
Lead Update API: PUT /leads/:id
Lead Search API: GET /leads?q={searchTerm}
Add Comment API: POST /comments

# Install dependencies using npm install.
Set up a MySQL database and configure the connection in the code.
Run the server using npm start.
Access the APIs using appropriate endpoints and HTTP methods as described above.

# Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or suggestions. (mt166831@gmail.com)

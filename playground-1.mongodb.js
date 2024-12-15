
use('Faculty');

db.Faculty.insertMany([
    {
        "faculty_id": "F001",
        "name": "Dr. Emily Johnson",
        "department": "Computer Science",
        "subjects": ["Data Structures", "Algorithms"],
        "position": "Professor",
        "email": "emily.johnson@school.edu"
    },
    {
        "faculty_id": "F002",
        "name": "Prof. John Smith",
        "department": "Mathematics",
        "subjects": ["Calculus", "Linear Algebra"],
        "position": "Assistant Professor",
        "email": "john.smith@school.edu"
    },
    {
        "faculty_id": "F003",
        "name": "Ms. Sarah Williams",
        "department": "Physics",
        "subjects": ["Mechanics", "Electromagnetism"],
        "position": "Lecturer",
        "email": "sarah.williams@school.edu"
    },
    {
        "faculty_id": "F004",
        "name": "Dr. Michael Brown",
        "department": "Computer Science",
        "subjects": ["Machine Learning", "Artificial Intelligence"],
        "position": "Associate Professor",
        "email": "michael.brown@school.edu"
    },
    {
        "faculty_id": "F005",
        "name": "Prof. Linda Green",
        "department": "Chemistry",
        "subjects": ["Organic Chemistry", "Inorganic Chemistry"],
        "position": "Professor",
        "email": "linda.green@school.edu"
    }
]);

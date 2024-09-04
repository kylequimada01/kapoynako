const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define your personal details
const firstName = 'John';
const lastName = 'Doe';
const age = 20;
const schoolEmail = 'johndoe@school.edu';

// Route handlers
app.get('/firstname', (req, res) => {
    res.send(firstName.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(lastName.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(`${age}`);
});

app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName.toUpperCase(),
        last_name: lastName.toUpperCase(),
        age: age,
        school_email: schoolEmail
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
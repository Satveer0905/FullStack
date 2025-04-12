const http = require('http'); // Import the http module to create an HTTP server
const fs = require('fs').promises; // Import the fs module to handle file operations using promises
const PORT = 3005; // Define the port number for the server

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests (OPTIONS)
    if (req.method === "OPTIONS") {
        res.statusCode = 200; // Respond with 200 OK
        return res.end(); // End the response
    }

    // Handle registration requests
    if (req.url === "/register" && req.method === "POST") {
        let body = ''; // Initialize an empty string to collect the request body

        // Collect data chunks from the request
        req.on('data', chunk => { body += chunk; });

        // Process the complete request once all data has been received
        req.on('end', async () => {
            try {
                // Parse the JSON body to extract name, email, password, and userType
                const { name, email, password, userType } = JSON.parse(body);
                let data = []; // Initialize an empty array to hold user data

                // Attempt to read existing user data from student.json
                try {
                    const fileData = await fs.readFile('student.json', 'utf-8');
                    data = JSON.parse(fileData); // Parse the JSON data into an array
                } catch {
                    data = []; // If the file doesn't exist or is empty, initialize data as an empty array
                }

                // Check if the email is already registered
                const exists = data.find(u => u.email === email);
                if (exists) {
                    // If the email is already registered, send an error response
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ msg: "Email is already registered" }));
                }

                // If the email is not registered, add the new user to the array
                data.push({ name, email, password, userType }); // Save userType along with other user details
                await fs.writeFile('student.json', JSON.stringify(data, null, 2)); // Write the updated user data back to student.json

                // Send a success response
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: "User  successfully registered" }));
            } catch (err) {
                // Handle any errors that occur during the registration process
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: "Error: " + err.message })); // Send error response
            }
        });
    }

    // Handle login requests
    if (req.url === "/login" && req.method === "POST") {
        let body = ''; // Initialize an empty string to collect the request body

        // Collect data chunks from the request
        req.on('data', chunk => { body += chunk; });

        // Process the complete request once all data has been received
        req.on('end', async () => {
            try {
                // Parse the JSON body to extract email, password, and role
                const { email, password, role } = JSON.parse(body);

                // Read the existing user data from student.json
                const fileData = await fs.readFile('student.json', 'utf-8');
                const users = JSON.parse(fileData); // Parse the JSON data into an array

                // Check if the user exists and the password matches, along with the userType
                const user = users.find(u => u.email === email && u.password === password && u.userType === role);

                // Set the response content type to JSON
                res.setHeader('Content-Type', 'application/json');
                if (user) {
                    // If the user is found, send a success response
                    res.end(JSON.stringify({ msg: "success" }));
                } else {
                    // If the user is not found, send an invalid user response
                    res.end(JSON.stringify({ msg: "User  is invalid" }));
                }
            } catch (err) {
                // Handle any errors that occur during the login process
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ msg: "Error: " + err.message })); // Send error response
            }
        });
    }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT); // Log the server status
});
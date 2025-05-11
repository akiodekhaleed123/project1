<?php
// Database credentials
$host = 'localhost';
$db   = 'your_database_name';
$user = 'your_db_username';
$pass = 'your_db_password';

// Create database connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$name = $_POST['name'];
$email = $_POST['email'];

// Insert into database
$sql = "INSERT INTO signups (name, email) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $email);

if ($stmt->execute()) {
    echo "Thank you for signing in!";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
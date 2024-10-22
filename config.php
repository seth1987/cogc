<?php
// config.php

// Obtenir les informations de connexion à partir de la variable d'environnement JAWSDB_URL
$url = parse_url(getenv("JAWSDB_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

// Connexion à la base de données
$conn = new mysqli($server, $username, $password, $db);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retourner la connexion
return $conn;
?>

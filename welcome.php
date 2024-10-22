<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-image: url('https://i.postimg.cc/85xFVQNC/background.jpg');
            background-size: cover;
            background-position: center;
        }
        .form-container {
            background: rgba(255, 255, 255, 0.5);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            width: 640px; /* Ajustez la largeur selon les besoins */
            position: relative;
            text-align: center; /* Centrer les éléments dans le formulaire */
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Bienvenue, <?php echo $_SESSION['user_email']; ?>!</h1>
        <p>Vous êtes connecté.</p>
        <a href="logout.php">Se déconnecter</a>
    </div>
</body>
</html>

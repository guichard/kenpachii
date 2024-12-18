document.querySelector('.secret--button').addEventListener('click', function() {
    var paragraph = document.querySelector('.secret--p');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'flex'; // Afficher le paragraphe
    } else {
        paragraph.style.display = 'none'; // Cacher le paragraphe
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('response').style.display = 'block';
    document.getElementById('response').textContent = 'Message envoyé avec succès !';
    document.getElementById('contactForm').reset();
});


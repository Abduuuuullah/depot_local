function changerCouleur() {
    var maDiv = document.getElementById("maDiv");
    var nouvelleCouleur = genererCouleurAleatoire();
    maDiv.style.backgroundColor = nouvelleCouleur;
  }
  
  function genererCouleurAleatoire() {
    var lettres = "0123456789ABCDEF";
    var couleur = "#";
    for (var i = 0; i < 6; i++) {
      couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
  }
  
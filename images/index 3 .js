let randomiseur = Math.floor(Math.random() * 3);

let destin = "";

switch (randomiseur) {
  case 0:
    destin = "Une certaine victoire";
    break;
  case 1:
    destin = "Pas si certain";
    break;
  case 2:
    destin = "Une victoire difficile";
    break;
  default:
    destin = "Ton sort n'est pas clair, ô mort-vivant choisi";
    break;
}
console.log("Le destin est : " + destin);

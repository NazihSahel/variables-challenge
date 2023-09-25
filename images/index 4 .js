function checkSeason(mois) {
  const moisVersSaison = {
    1: "Hiver",
    2: "Hiver",
    3: "Printemps",
    4: "Printemps",
    5: "Printemps",
    6: "Été",
    7: "Été",
    8: "Été",
    9: "Automne",
    10: "Automne",
    11: "Automne",
    12: "Hiver",
  };

  if (mois >= 1 && mois <= 12) {
    return moisVersSaison[mois];
  } else {
    return "Mois invalide";
  }
}
const moisActuel = 9;
const saisonActuelle = checkSeason(moisActuel);
console.log(`Nous sommes en ${saisonActuelle}`);

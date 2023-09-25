let countries = ["Chine", "Japon", "Corée du Sud", "Vietnam", "Malaisie"];
let capitals = ["Pékin", "Tokyo", "Séoul", "Hanoï", "Kuala Lumpur"];
if (countries.length === capitals.length) {
  for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let capital = capitals[i];

    console.log(`Pays : ${country}  capitale  : ${capital}.`);
  }
}

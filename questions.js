var CreationTableauLangages = function () {
  var langages = ['Html', 'CSS', 'Java', 'PHP'];
  return langages;
}

var CreationTableauNombres = function () {
  var nombres = [0, 1, 2, 3, 4, 5];
  return nombres;
}

var RemplacementElement = function (langages) {
  langages[2] = 'Javascript';
  return langages;
}

var AjoutElementLangages = function (langages) {
  var result = langages.push('Ruby', 'Python');
  return langages;
}

var AjoutElementNombres = function (nombres) {
  var result = nombres.unshift(-2, -1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  var result = langages.shift();
  return langages;
}

var SuppressionDernierElement = function (langages) {
  var result = langages.pop();
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_sociaux = reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
  var result = langages.toString();
  return result;
}

var TriTableau = function (reseaux_sociaux) {
  var result = reseaux_sociaux.sort();
  return result;
}

var InversionTableau = function (reseaux_sociaux){
  var result = reseaux_sociaux.reverse();
  return result;
}

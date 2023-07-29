function greet(language) {
  obj = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  console.log(obj.hasOwnProperty(language));
  if (obj.hasOwnProperty(language) === true) {
    return obj[language];
  } else {
    return "Welcome";
  }
}

console.log(greet("english"));
console.log(greet("dutch"));

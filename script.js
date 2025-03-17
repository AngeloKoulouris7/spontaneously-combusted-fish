//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Wake Up",
  "Feed your cat",
  "Water the plants",
  "Eat Food",
  "Work",
  "Watch TV",
  "Buy Things",
  "Go To Sleep",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFunction() {
  var x = document.getElementById("subject").value;
  if (x === "flighty") {
    addEval("🛩️🐦🦅🦋🌪️💭");
  } else if (x === "vague") {
    addEval("🥱👽🐙🪼🌘");
  } else if (x === "joyful") {
    addEval("😀😍😸👾👻🕺");
  } else if (x === "cloudy") {
    addEval("🌦️🌨️🫧🌫️☔⚡🥶");
  } else if (x === "hangry") {
    addEval("🍟🥨🌮🥗🍱");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "Giancarlo, you are still 2 seconds a lap slower than Fernando.",
  "No Michael no, that was so not right!",
  "Must be the water.",
  "Lets add that to the words of wisdom.",
  "Toto, its called a motor race, OK?",
  "We went car racing.",
  "I'm hanging here like a cow.",
  "He cut the chicken! He needs to give back the position.",
  "Gentlemen a short view back to the past...",
  "There's something loose between my legs.",
  "bwoah",
  "Hey... HEY! Steering Wheel!",
  "Can you repeated the question?",
  "Smooth operatooooooooor!",
  "Valtteri, its James...",
  "Leave me alone I know what I'm doing",
  "I was having a shit.",
  "There's nothing wrong with the car except that its on fire",
  "OH MY GOD, WHAT DID WE JUST DO!",
  "Nothing just an inchident.",
  "No, Kimi, you will not have the drink.",
  "To whom it may concern, fuck you.",
  "We are checking...",
  "I was forecast for a podium.",
  "Theres a giant lizard on the track",
  "I think Ericsson hit us",
];
const sevenSyllables = [

];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(fiveSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(fiveSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(fiveSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "Abomasnow",
  "Abra",
  "Absol",
  "Accelgor",
  "Aegislash",
  "Aerodactyl",
  "Aggron",
  "Aipom",
  "Alakazam",
  "Alcremie",
  "Alomomola",
  "Altaria",
  "Amaura",
  "Ambipom",
  "Amoonguss", 
  "Ampharos",
  "Annihilape",
  "Anorith",
  "Appletun",
  "Applin",
  "Araquanid",
  "Arbok",
  "Arboliva", 
  "Arcanine",
  "Arceus", 
  "Archaludon", 
  "Archen",
  "Archeops", 
  "Arctibax",
  "Arctovish",
  "Arctozolt",
  "Ariados",
  "Armaldo",
  "Armarouge",
  "Aromatisse", 
  "Aron",
  "Arrokuda",
  "Articuno", 
  "Audino",
  "Aurorus",
  "Avalugg", 
  "Axew",
  "Azelf",
  "Azumarill",
  "Azurill", 
  

  "Bagon",
  "Baltoy",
  "Banette",
  "Barbaracle",
  "Barboach",
  "Barraskewda",
  "Basculegion",
  "Basculin",
  "Bastiodon",
  "Baxcalibur",
  "Bayleef",
  "Beartic",
  "Beautifly",
  "Beedrill",
  "Beheeyem",
  "Beldum",
  "Bellibolt",
  "Bellossom",
  "Bellsprout",
  "Bergmite",
  "Bewear",
  "Bibarel",
  "Bidoof",
  "Binacle",
  "Bisharp",
  "Blacephalon",
  "Blastoise",
  "Blaziken",
  "Blipbug",
  "Blissey",
  "Blitzle",
  "Boldore",
  "Boltund",
  "Bombirdier",
  "Bonsly",
  "Bouffalant",
  "Bounsweet",
  "Braixen",
  "Brambleghast",
  "Bramblin",
  "Braviary",
  "Breloom",
  "Brionne",
  "Bronzong",
  "Bronzor",
  "Brute Bonnet",
  "Bruxish",
  "Budew",
  "Buizel",
  "Bulbasaur",
  "Buneary",
  "Bunnelby",
  "Burmy",
  "Butterfree",
  "Buzzwole",

  "can i seek to vary my family court order",
  "ccs has no cctv",
  "childcare how expensive",

  "delete search history",
  "delusional jealousy",
  "dv stats australia",

  "earliest memories as a child",
  "emotional manipulation signs",

  "fridge magnets",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "the fish, the chicken, the gnome, the frog, the cyborgs".split(
      ","
    ),
  verbs =
    "spontaneously, promptly, rapidly, laughed until it, crawled until it, sneaked across and then, ran to, fought a insect to, ".split(
      ","
    ),
  objects =
    "combusted, crossed the road, exploded, exited the earth's atmosphere, ascended beyond reality, became god, destroyed the sun, conquered the moon".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 1000);
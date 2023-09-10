// JavaScript code here
const skillSafari = "Skill Safari";
const lengthOfString = skillSafari.length;
const uppercaseString = skillSafari.toUpperCase();
const indexOfA = skillSafari.indexOf("a");

const conversation = [
  "Captain America: Big man in a suit of armour. Take that off, what are you?",
  "Iron Man:  Genius, billionaire, playboy, philanthropist.",
  "Captain America:  I know guys with none of that worth ten of you. I've seen the footage. The only thing you really fight for is yourself.You're not the guy to make the sacrifice play, to lay down on a wire and let the other guy crawl over you.",
  "Iron Man:  I think I would just cut the wire.",
  "Captain America:  Always a way out... You know, you may not be a threat, but you better stop pretending to be a hero.",
  "Iron Man: A hero? Like you? You're a lab rat, Rogers. Everything special about you came out of a bottle!",
  "Captain America: Put on the suit. Let's go a few rounds",


];

const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  return bmi;
};

const weight = 70; // in kilograms
const height = 1.75; // in meters

const bmi = calculateBMI(weight, height);

// Displaying the results on the webpage
const resultContainer = document.getElementById("resultContainer");

const lengthResult = document.createElement("p");
lengthResult.textContent = `Length of the string: ${lengthOfString}`;
resultContainer.appendChild(lengthResult);

const uppercaseResult = document.createElement("p");
uppercaseResult.textContent = `String in uppercase: ${uppercaseString}`;
resultContainer.appendChild(uppercaseResult);

const indexOfAResult = document.createElement("p");
indexOfAResult.textContent = `Index of 'a': ${indexOfA}`;
resultContainer.appendChild(indexOfAResult);

const conversationResult = document.createElement("h2");
conversationResult.textContent = "Famous Conversation:";
resultContainer.appendChild(conversationResult);

const conversationList = document.createElement("ul");
for (const line of conversation) {
  const listItem = document.createElement("li");
  listItem.textContent = line;
  conversationList.appendChild(listItem);
}
resultContainer.appendChild(conversationList);

const bmiResult = document.createElement("p");
bmiResult.textContent = `Body Mass Index (BMI): ${bmi.toFixed(2)}`;
resultContainer.appendChild(bmiResult);
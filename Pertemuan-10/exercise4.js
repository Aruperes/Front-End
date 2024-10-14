// Array

let people = ["greg", "marry", "devon", "james"];
// For Loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// For Each
people.forEach(function (item) {
  console.log(item);
});

//Shift
people.shift();

//Pop
people.pop();

//unshift
people.unshift("matt");

//Push
people.push("revando");

//break
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "marry") {
    break;
  }
}

//slice
let people2 = people.slice(2);
console.log(people2);

//splice
people.splice(2, 1, "elizabeth", "Artie");

//concat
let withBob = people.concat("Bob");
console.log("Final Result: ", withBob);

//  Object
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Go
programming.languages.push("Go");

//change
programming["difficulty"] = 7;

//delete
delete programming.jokes;

//true
programming.isFun = true;
console.log(programming);

//map
programming.languages.map((language, index) => {
  console.log(`${index} - ${language}`);
});

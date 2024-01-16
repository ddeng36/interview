// Now we want to :
// 1. sort the list
// 2. filter the people who is elder then 25
// 3. save info to logTest;

const peopleList = [
  {
    name: "John Lee",
    age: 24,
    career: "engineer",
  },
  {
    name: "Bob Chen",
    age: 22,
    career: "engineer",
  },
  {
    name: "Lucy Liu",
    age: 28,
    career: "PM",
  },
  {
    name: "Jack Zhang",
    age: 26,
    career: "PM",
  },
  {
    name: "Yan Xiu",
    age: 30,
    career: "engineer",
  },
];

// Imperative Programming
const len = peopleList.length;
// 1. sort the list
for (let i = 0; i < len; i++) {
  for (let j = 0; j < len - 1; j++) {
    if (peopleList[i].age > peopleList[j + 1].age) {
      [peopleList[i], peopleList[j + 1]] = [peopleList[j + 1], peopleList[i]];
    }
  }
}
//2. filter the people who is elder then 25
let logText = "";
for (let i = 0; i < len; i++) {
  const person = peopleList[i];
  if (person.age > 24) {
    const perLogText = `${person.name}'s age is ${person.age}`;
    if (i !== len - 1) {
      logText += `${perLogText},`;
    } else {
      logText += perLogText;
    }
  }
}
console.log(logText);

// Functional Programming
const filterCallback = (person) => person.age > 24;
const sortCallback = (person1, person2) => person1.age - person2.age;
const mapCallback = (person) => `${person.name}'s age is ${person.age}`;
console.log(peopleList.filter(filterCallback).sort(sortCallback).map(mapCallback).join(","));
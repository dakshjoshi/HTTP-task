var data = fetch(`https://restcountries.eu/rest/v2/all`);

data
  .then((a) => {
    return a.json();
  })
  .then((b) => {
    var name = b.map((c) => c.name);
    var population = b
      .map((c) => c.population)
      .reduce((d, e) => {
        return d + e;
      }, 0);
    console.log(`TASK 2 of Names`);
    console.log(name);
    console.log(`TASK 2 of Population`);
    console.log(population);
  })
  .catch((err) => {
    return err;
  });

console.log(`JSON tasks`);
//JSON TASKS
//Task 1
var cat = {
  name: `Fluffy`,
  activities: [`play`, `eat cat food`],
  catFriends: [
    {
      name: `bar`,
      activities: [`be grumpy`, `eat bread omblet`],
      weight: 8,
      furcolor: `white`,
    },
    {
      name: `foo`,
      activities: [`sleep`, ` pre-sleep naps`],
      weight: 3,
    },
  ],
};
console.log(`PROBLEM 0 PART A`);

var height = { height: 50, weight: 10 };
cat.name = `fluffyy`;
console.log(cat.name);

console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);
console.log(cat.catFriends[0].name, cat.catFriends[1].name);
console.log(cat.catFriends[0].weight + cat.catFriends[1].weight);
console.log(
  cat.activities,
  cat.catFriends[0].activities,
  cat.catFriends[1].activities
);
var bar = [`roaming`, `eating`];
var foo = [`roaming`, `eating`];

cat.catFriends[0].activities = [...cat.catFriends[0].activities, ...bar];
cat.catFriends[1].activities = [...cat.catFriends[1].activities, ...foo];

console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);

cat.catFriends[0].furcolor = `blue`;
console.log(cat.catFriends[0].furcolor);

console.log(`PROBLEM 0 PART B`);
var myCar = {
  make: `Bugatti`,
  model: `Bugatti La Voiture Noire`,
  year: 2019,
  accidents: [
    {
      date: `3/15/2019`,
      damage_points: 5000,
      atFaultForAccident: true,
    },
    {
      date: `7/4/2022`,
      damage_points: 2200,
      atFaultForAccident: true,
    },
    {
      date: `6/22/2021`,
      damage_points: 7900,
      atFaultForAccident: true,
    },
  ],
};

for (i = 0; i < 3; i++) {
  myCar.accidents[i].atFaultForAccident = false;
}
console.log(myCar);

console.log(
  myCar.accidents[0].date,
  myCar.accidents[1].date,
  myCar.accidents[2].date
);

console.log(`PROBLEM 1`);
var obj = { name: `RajiniKanth`, age: 33, hasPets: false };
var newArr = [];
function printAllValues(obj) {
  newArr.push(obj.name, obj.age, obj.hasPets);
  console.log(newArr);
}
printAllValues(obj);

console.log(`PROBLEM 2`);

console.log(obj[1]);
var keyArr = [];
function printAllKeys(obj) {
  for (let [key] of Object.entries(obj)) {
    keyArr.push(key);
  }
  console.log(keyArr);
}

printAllKeys(obj);

console.log(`PROBLEM 3`);

var ISRObj = { name: `ISRO`, age: 35, role: `Scientist` };
var ISROarr = [];

function convertListToObject(obj) {
  for (let [key, value] of Object.entries(obj)) {
    var temp = [];
    temp.push(key);
    temp.push(value);

    ISROarr.push(temp);
  }
  console.log(ISROarr);
}

convertListToObject(ISRObj);

console.log(`PROBLEM 4`);
var arr = [`GUVI`, `I`, `am`, `Geek`];
var guviObj = {};
function transformFirstAndLast(arr) {
  var length = arr.length;
  guviObj[arr[0]] = arr[length - 1];
  console.log(guviObj);
}

//Display : GUVI : `Geek`
transformFirstAndLast(arr);

console.log(`PROBLEM 5`);
var arrToObj = [
  [`make`, `Ford`],
  [`model`, `Mustang`],
  [`year`, 1964],
];
function fromListToObject(arr) {
  var newObj = {};

  for (i = 0; i < arrToObj.length; i++) {
    newObj[arrToObj[i][0]] = arrToObj[i][1];
  }
  console.log(newObj);
}
fromListToObject(arrToObj);

console.log(`PROBLEM 6`);
var EmployeeDataArr = [
  [
    [`firstName`, `Vasanth`],
    [`lastName`, `Raja`],
    [`age`, 24],
    [`role`, `JSWizard`],
  ],
  [
    [`firstName`, `Sri`],
    [`lastName`, `Devi`],
    [`age`, 28],
    [`role`, `Coder`],
  ],
];

function transformEmployeeData(arro) {
  var tranformEmployeeList = [];
  for (i = 0; i < arro.length; i++) {
    var object4u = {};
    for (m = 0; m < arro[i].length; m++) {
      object4u[arro[i][m][0]] = arro[i][m][1];
    }
    tranformEmployeeList.push(object4u);
  }
  console.log(tranformEmployeeList);
}
transformEmployeeData(EmployeeDataArr);

console.log(`PROBLEM 7`);
var expected = { foo: 5, bar: 6 };
var actual = { foo: 5, bar: 6 };
var a;
function assertObjectsEqual(actual, expected, testName) {
  JSON.stringify(expected) == JSON.stringify(actual)
    ? console.log(`EQUAL`)
    : console.log(`Not Equal`);
}
assertObjectsEqual(actual, expected, a);

console.log(`PROBLEM 8`);
var securityQuestions = [
  {
    question: `What was your first pet’s name?`,
    expectedAnswer: `FlufferNutter`,
  },
  {
    question: `What was the model year of your first car?`,
    expectedAnswer: `1985`,
  },
  {
    question: `What city were you born in?`,
    expectedAnswer: `NYC`,
  },
];

var answers = [`DufferNutter`, `1985`, `Amrika`];
function chksecurityQuestions(securityQuestions, question) {
  for (var i in securityQuestions) {
    securityQuestions[i].expectedAnswer == answers[i]
      ? console.log(true)
      : console.log(false);
  }
}
chksecurityQuestions(securityQuestions, answers);

console.log(`PROBLEM 9`);
var students = [
  {
    name: `Siddharth Abhimanyu`,
    age: 21,
  },
  { name: `Malar`, age: 25 },
  { name: `Maari`, age: 18 },
  { name: `Bhallala Deva`, age: 17 },
  { name: `Baahubali`, age: 16 },
  { name: `AAK chandran`, age: 23 },
  { name: `Gabbar Singh`, age: 33 },
  { name: `Mogambo`, age: 53 },
  { name: `Munnabhai`, age: 40 },
  { name: `Sher Khan`, age: 20 },
  { name: `Chulbul Pandey`, age: 19 },
  { name: `Anthony`, age: 28 },
  { name: `Devdas`, age: 56 },
];
function returnMinors(arr) {
  var youngPpl = arr.filter((a) => a.age < 20);
  console.log(youngPpl);
}
console.log(returnMinors(students));

console.log(`How to copy by value a composite data type (array+objects)
`);
var abcd = [{ lmnop: `wow, yoyo` }, `bANANA`];
var abcdlm = abcd.slice();

abcd.push(` Monke like Banana`);

console.log(abcd);
console.log(abcdlm);

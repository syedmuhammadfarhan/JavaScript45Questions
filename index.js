//Q2
console.log("");
console.log("2");
var name1 = "syed muhammad farhan";
console.log("Hello" + ' ' + name1 + "," + ' '+ "would you like to learn some Javascript today?");

//Q3
//lowercase
console.log("");
console.log("3");

console.log( name1.toLowerCase());
//uppercase
console.log( name1.toUpperCase());
//titlecase
var Name1Array = (name1.split(" "));

for (var i = 0; i < Name1Array.length; i++) {
    Name1Array[i] = Name1Array[i][0].toUpperCase()+ Name1Array[i].slice(1) ;

}

console.log( Name1Array.join(" "));

//Q4
console.log("");
console.log("4");

console.log("Malcolm X once said,\"The future belongs to those who prepare for it today.\"");

//Q5
console.log("");
console.log("5");

var famous_person = "Malcom X" ; 
var message = "once said,\"The future belongs to those who prepare for it today.\"";
console.log( famous_person + " " + message);


//Q6
console.log("");
console.log("6");

function wname(text) {
    console.log(text);
    console.log(text);
}
wname("\"\tsyed\nmuhammad\nfarhan\t\"");
wname("\"syed\nmuhammad\nfarhan\"");

//Q7Q8 to display num 8 by using arithmetic operators 
console.log("");
console.log("7 & 8");

var a,b,c,d = 4;
console.log(5+3);
console.log(10-2);
console.log(16/2);
console.log(4*2);

//Q9 to show favourite number
console.log("");
console.log(9);

let favnum = 3;
console.log(`My favourite number is ` +  favnum);

//Q10 Comments has been added in Q no 7,8,9
console.log(10);
console.log(`adding comments`);

//Q11
console.log("");
console.log("11");

console.log("Q11:Friendnames Array");

let friendnames = ["Babar", "Rizwan", "Fakhar", "Asif", "Shaheen"];

friendnames.forEach(function(element){
    console.log(element);
});

//Q12 
console.log("");
console.log("12");

friendnames.forEach(function(element){
    console.log(`Hello ` + element);
});

//Q13

console.log("");
console.log("13");

let transports = ["Yamaha 125", "Toyota Vitz"]
transports.forEach(function(value){
    console.log(`I would like to buy ${value}`);
});


//Q14

console.log("");
console.log("14");

let guestlist = ["Babar", "Rizwan", "Fakhar", "Asif"];
guestlist.forEach(function(guestname){
    console.log(`Mr. ${guestname} I would like to invite you on Dinner.`);

});


//Q15

console.log("");
console.log("15");

guestlist[0] = "Ashraf";
guestlist.forEach(function(guestname){
    console.log(`Mr. ${guestname} I would like to invite you on Dinner.`);
   
});


//Q16

console.log("");
console.log("16");

let guestList1 = guestlist.slice(0);
guestList1.unshift("Farhan");
guestList1.splice(2,0, "Naseem");
guestList1.push("Asad");
      guestList1.forEach(function(guestname){
    console.log(`Mr. ${guestname} I would like to invite you on Dinner.`);

   });

//Q17

console.log("");
console.log("17");
console.log(guestList1);
console.log(`I can invite only two people for dinner.`);
let person1 = guestList1.pop();
console.log(`I am sorry ${person1} I can’t invite you to dinner.`);
let person2 = guestList1.pop();
console.log(`I am sorry ${person2} I can’t invite you to dinner.`);
let person3 = guestList1.pop();
console.log(`I am sorry ${person3} I can’t invite you to dinner.`);
let person4 = guestList1.pop();
console.log(`I am sorry ${person4} I can’t invite you to dinner.`);
let person5 = guestList1.pop();
console.log(`I am sorry ${person5} I can’t invite you to dinner.`);

console.log(`${guestList1[0]} and ${guestList1[1]} you are still invited`);

guestList1.pop();
guestList1.pop();

console.log(guestList1);

//Q18

console.log("");
console.log("18");


let friendList = ["Denmark", "Bhutan", "Egypt", "Canada", "America"];
console.log(`Original Array `, friendList);

let ascendingarr = friendList.slice(0);
console.log(`Ascending order `, ascendingarr.sort());

console.log(`Original Array `, friendList);

let descendingarr = ascendingarr.slice(0);
console.log(`Descending order `, descendingarr.reverse());

console.log(`Original Array `, friendList);

console.log(`Changed original `, friendList.reverse());
console.log(`Return orignal `, friendList.reverse());

friendList = friendList.sort();
console.log(`Updated Original Array Ascending `, friendList);

friendList = friendList.reverse();
console.log(`Updated Original Array Descending `, friendList);

//Q19
console.log("");
console.log("19");

console.log(`number of people invited to dinner are`,guestList1.length);

//Q20
console.log("");
console.log("20");
let arr_places = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Swat"];

console.log(`List of Places`);
arr_places.forEach(function(value,index) {
  console.log(index+1, value);

});

//Q21
console.log("");
console.log("21");

let obj = {
  1 : "Karachi",
  2 : "Lahore",
  3 : "Islamabad",
  4 : "Quetta",
  5 : "Peshawar",
  6 : "Swat",
};
for(let i in obj){
  console.log(i,`:`,obj[i]);
};

//Q22
console.log("");
console.log("22");

//const arr_index = [1, 2, 3];

let err = [1, 2, 3];
for (let i = 0; i <= err.length; i++) {
  if (err[i]){
    console.log(err[i]);

  } else {
    console.log(`Error: index not found`);
  }
};

console.log("");
console.log("23");

let car = "Honda";
console.log(`Is car == "Honda"? I predict True.`);
console.log(car == "Honda");
console.log(`Is car === "Honda"? I predict True.`);
console.log(car === "Honda");
console.log(`Is car != "Honda"? I predict false.`);
console.log(car != "Honda");
console.log(`Is car !== "Honda"? I predict false.`);
console.log(car !== "Honda");

let num = 5;

console.log(`Is Num == "5"? I predict True.`);
console.log(num == "5");
console.log(`Is Num === "5"? I predict false.`);
console.log(num === "5");
console.log(`Is Num !== "5"? I predict false.`);
console.log(num != "5");
console.log(`Is Num !=== "5"? I predict true.`);
console.log(num !== "5");
console.log(`Is Num > 5 ? I predict false.`);
console.log(num > "5");
console.log(`Is Num < "5"? I predict false.`);
console.log(num < "5");
console.log(`Is Num <= 5 ? I predict true.`);
console.log(num <= 5);
console.log(`Is Num >= 5 ? I predict true.`);
console.log(num >= 5);

console.log("");
console.log("24");

let strng = "farhan";
console.log("")
console.log(`string is "farhan"`)

console.log(`string === "farhan" ?`, (strng === "farhan"));
console.log(`string !== "farhan" ?`, (strng !== "farhan"));
console.log(`string is in lower case ?`, (strng === "farhan"));
console.log(`string is in lower case ?`, (strng === "FARHAN"));


let A = 7;
let B = 8;
console.log("")
console.log(`A = 7 and B = 8`);

console.log(`A is equal to B ?`, (A === B));
console.log(`A is not equal to B ?`, (A !== B));
console.log(`A is greater than B ?`, (A > B));
console.log(`A is less than B ?`, (A < B));
console.log(`A is greater than equal to B ?`, (A >= B));
console.log(`A is less than equal to B ?`, (A <= B));

console.log(`A < B && B > A ?`, (A < B && B > A));
console.log(`A > B && B > A ?`, (A > B && B > A));

console.log(`A < B || B > A ?`, (A < B || B > A));
console.log(`A > B || B < A ?`, (A > B || B < A));

console.log("")
let itemInArray = [1, 2, 3, 4];
for (let x = 0; x <= itemInArray.length; x++) {
  if (itemInArray[x]) {
    console.log(`item ${itemInArray[x]} is in Array`);
    } else {
      console.log(`item ${x + 1} is not in Array`);

    }
};

console.log("")
let itemNotInArray = [1, 2, 3, 4];
for (let y = 1; y <= 10; y++) {
  if (itemNotInArray.indexOf(y) === -1) {
    console.log(`since y = -1, hence, Item is not in array`);
    break;
  }
};

console.log("");
console.log("25");

function color1(alien_color1) {
  if (alien_color1 === "green") {
    console.log(`The player just earned 5 points for shooting the alien.`)
  } else if (alien_color1 !== "green") {
    
  }
  };
  color1("green");
  color1("red");

console.log("");
console.log("26");

function color2(alien_color2) {
if (alien_color2 === "green") {
  console.log(`The player just earned 5 points for shooting the alien.`)
} else if (alien_color2 !== "green") {
  console.log(`The player just earned 10 points.`);
}
};
color2("green");
color2("red");

console.log("");
console.log("27");

function color3(alien_color3) {
  if (alien_color3 === "green") {
    console.log(`The player earned 5 points.`)
  } else if (alien_color3 === "yellow") {
    console.log(`The player earned 10 points.`);
  } else if (alien_color3 === "red") {
    console.log(`The player earned 15 points.`);
  } 
  };
  color3("green");
  color3("yellow");
  color3("red");

console.log("");
console.log("28");

let age = 37;
if (age < 2) {
  console.log(`The person is a baby`);
} else if (age >= 2 && age < 4) {
  console.log(`The person is a toddler`);
} else if (age >= 4 && age < 13) {
  console.log(`The person is a kid`);
} else if (age >= 13 && age < 20) {
  console.log(`The person is a teenager`);
} else if (age >= 20 && age < 65) {
  console.log(`The person ia an adult`);
} else if (age >= 65) {
  console.log(`The person is an elder`);
};

console.log("");
console.log("29");

let favorite_fruits = ["Mango", "Apple", "Banana"];
if (favorite_fruits[0] === "Mango") {
  console.log(`you really like ${favorite_fruits[0]}.`);
} 
else if (favorite_fruits[1] === "Mango") {
  console.log(`you really like ${favorite_fruits[1]}.`);
}
else if (favorite_fruits[2] === "Mango") {
  console.log(`you really like ${favorite_fruits[2]}.`);
}
else if (favorite_fruits[3] === "Mango") {
  console.log(`you really like ${favorite_fruits[3]}.`);
}
else if (favorite_fruits[4] === "Mango") {
  console.log(`you really like ${favorite_fruits[4]}.`);
};

console.log("");
console.log("30");

let userName = ["Admin", "Babar", "Rizwan", "Asif", "Shadab"];
for (let i = 0; i < userName.length; i++) {
  if (userName[i] === "Admin") {
    console.log(`Hello Admin, would you like to see a status report?`);
  }
  else {
    console.log(`Hello ${userName[i]}, thank you for logging in again.`)
  }
};

console.log("");
console.log("31");
// taking array of Q30

let userName0 = userName.slice(0, 0);
console.log(userName0);
if (userName0.length === 0) {
  console.log(`We need to find some users!`);
};

console.log("");
console.log("32");

// unique username search without changing element case in original array

let current_users = ["Shahid", "JAVED", "faisal", "UMAIR", "babar"];
let new_users = ["Tanveer", "Zahid", "Javed", "IMRAN", "Umair"];

let current_users_new = [];

for (let i = 0; i < current_users.length; i++) {
    current_users_new[i] = current_users[i].toLowerCase();
}

for (let i = 0; i < new_users.length; i++) {
    let element = new_users[i].toLowerCase();
     
    if (current_users_new.indexOf(element) === -1) {
        console.log(`The username, ${new_users[i]}, is available.`);
    }
    
    else {
        console.log(`The person, ${new_users[i]}, will need to enter a new username.`)
    }
};



console.log("");
console.log("33");

let ord_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ord_num.length; i++) {
  if (ord_num[i] === 1) {
    console.log(ord_num[i] + `st`);
  }
  else if (ord_num[i] === 2) {
    console.log(ord_num[i] + `nd`);
  }
  else if (ord_num[i] === 3) {
    console.log(ord_num[i] + `rd`);
  }
  else {
    console.log(ord_num[i] + `th`);
  }
};



console.log("");
console.log("34");

let pizza_name = ["Fajita", "BBQ", "Afghani Tikka"];
for (let i = 0; i < pizza_name.length; i++) {
  console.log(`${pizza_name[i]}`);
  console.log(`I Like ${pizza_name[i]} Pizza`);
}
console.log(pizza_name[0],`is delicious i really like Pizza!`);
console.log(pizza_name[1],`is delicious i really like Pizza!`);
console.log(pizza_name[2],`is delicious i really like Pizza!`);


console.log("");
console.log("35");

let animal_names = ["Camel", "Hourse", "Donkey"];
for (i = 0; i < animal_names.length; i++) {
  console.log(animal_names[i]);
  console.log(animal_names[i], `is a great means of transportation`);
}
console.log(`Any of these animals would make a great means of transportation!`);


console.log("");
console.log("36");

function make_shirt(size, message) {
  console.log(`Size: ${size}\nMessage: ${message}`);
};
make_shirt("XL", "JUST DO IT");

console.log("");
console.log("37");

function make_shirt(size = "L", message = "I LOVE JAVA SCRIPT") {
  console.log(`Size: ${size}\nMessage: ${message}`);
};
make_shirt();
make_shirt("M");
make_shirt("XL", "SKY IS THE LIMIT");


console.log("");
console.log("38");

function describe_city(city, country = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}
describe_city("karachi");
describe_city("Quetta");
describe_city("Newyork", "America");


console.log("");
console.log("39");

function city_country(city, country) {
  console.log(`"${city}, ${country}"`);
}

city_country("Paris", "France");
city_country("Qabul", "Afghanistan");
city_country("Mecca", "Saudi Arabia");


console.log("")
console.log("40")

function make_album(artist, title, tracks) {
        let music_album = {
        Artist : artist,
        Title : title,
        
    }
    if (tracks) {
        music_album.Track = tracks;
    }
    return music_album;
};

console.log(make_album("Ed Sheeran", "Divide"));
console.log(make_album("Ed Eminem", "Infinite"));
console.log(make_album("Katy Perry", "Prism"));

console.log(make_album("Enrique Igliesias", "Euphoria", 12));


console.log("");
console.log("41");

let magi_name = ["Magician Mark", "Magician Jhon", "Magician William"];
function show_magicians() {
  for (let i = 0; i < magi_name.length; i++) {
    console.log(magi_name[i]);
  }
}
show_magicians();

console.log("");
console.log("42");

function make_great() {
  for (let i = 0; i < magi_name.length; i++) {
    magi_name[i] = "The great" + " " + magi_name[i].slice(0);
  }
}
show_magicians(make_great());



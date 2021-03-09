var name = "Michelle";  
console.log(name);

var favnumber = 76;
console.log(favnumber);

var favnumber ='76';
console.log(favnumber);

var IAmExcited = true;
console.log(true);

console.log(100 * 10, '1000', true);

var letters =['M', 'i', 'c', 'h','e','l','l','e'];
console.log(letters);

console.log('Butter', 3+10, false);

var firstname = 'Michelle';
var lastname = 'Napolitano';
console.log(firstname,lastname);

console.log(66 + 34);

var name = "Michelle"; 

function firstLast(array) {

var first = name[0];
var last = name[name.length-1]

var output = {};
output[first]=last

return output;
}

var display = firstLast(name);

console.log(display);

var poppins = 'supercalifragilisticexpialidocious';
console.log(poppins.length);

console.log(letters[0],letters[letters.length - 1]);

console.log(firstname.length == lastname.length);

letters.forEach(function(item) {
  console.log(item);
});

const array = ['M', 'i', 'c', 'h','e','l','l','e']
array.forEach(item => console.log('Loop'));

var time = new Date() .getHours();
if (time >= 19 && time <= 21.40) {
   console.log("Yes' it is between 7 and 9.40");
} 
else {
   console.log("No, it is not between 7 and 9.40");
}

var day = new Date().getDate();
if (day === 1) {
  console.log('Monday, I have illustration and typography class.');
}
if (day === 2) {
  console.log('Tuesday, I have core interaction studio class.');
}
if (day === 3) {
  console.log('Wednesday, I have intro to design class.');
}
if (day === 4) {
  console.log('Thursday, I have core interaction studio classs again.');
}
if (day === 5) {
  console.log('Friday, I have this class!');
}
if (day === 6) {
  console.log('Saturday, I have a free day.');
}
if (day === 7) {
  console.log('Sunday, I have a free day but I will do my homework.');
}

var restaurants =(['Serefina', 'Fujiyama', 'Cheesecake Factory']);
console.log(restaurants);

var things =(['Travel', 'Parties', 'Weddings']);
console.log(things);

var city =(['Union Square', 'Chinatown', 'Lincoln Center']);
console.log(city);

var movies =(['Scott Pilgrim vs. the World', 'The Florida Project', 'Being John Malkovich']);
console.log(movies);

var variable =[restaurants, things, city, movies]
console.log(variable);

var lists = [restaurants, things, city, movies];
console.log(lists);

lists.forEach(function(array) {
  array.forEach(function(item) {
    console.log(item);  
  });
});

var lists = [{restaurants, things, city, movies}];
console.log(lists);
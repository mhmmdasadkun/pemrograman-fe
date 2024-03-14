const users = [
  { name: "Jonas", age: 15 },
  { name: "Michael", age: 40 },
  { name: "Hannah", age: 35 },
];

// find bertujuan untuk mencari 1 data berdasarkan kondisi tertentu.
// Kondisi: umur lebih dari 21
const foundUser = users.find(function (user) {
  return user.age > 21;
});
console.log(foundUser);

// With arrow function
const foundUserArr = users.find((user) => user.age > 21);
console.log(foundUserArr);

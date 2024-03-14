const users = [
  { name: "Jonas", age: 15 },
  { name: "Michael", age: 40 },
  { name: "Hannah", age: 35 },
];

// find bertujuan untuk mencari semua data berdasarkan kondisi tertentu.
// Kondisi: umur lebih dari 21
const filteredUser = users.filter(function (user) {
  return user.age > 21;
});
console.log(filteredUser);

// With arrow function
const filteredUserArr = users.filter((user) => user.age > 21);
console.log(filteredUserArr);
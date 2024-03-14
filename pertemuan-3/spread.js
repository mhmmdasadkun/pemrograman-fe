// Array
// Without spread
console.log(`Spread Array`);

const families = ["Mikel", "Hannah"];
const newFamilies = [families[0], families[1], "Jonas", "Martha"];

console.log(`--Without spread`);
console.log(newFamilies);

// With spread (Mencegah tidak menambahkan parameter satu-satu di array/object kalau parameter bertambah & agar data asli tidak akan keubah jika kita define ulang)
const familiesSpread = ["Mikel", "Hannah", "John"];
const newFamiliesSpread = [...familiesSpread, "Jonas", "Martha"];

console.log(`--With spread`);
console.log(newFamiliesSpread);

// Object
console.log(`\nSpread Object`);

const user = {
  name: "Aufa",
  major: "Informatics",
};
const newUser = {
  name: user.name,
  major: user.major,
  age: 22,
};

console.log(`--Without spread`);
console.log(newUser);

const userSpread = {
  name: "Aufa",
  major: "Informatics",
  status: "Married",
};

const newUserSpread = {
  ...userSpread,
  age: 22,
};
console.log(`--Without spread`);
console.log(newUserSpread);

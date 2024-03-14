// Object
const req = {
  body: {
    name: "Aufa",
    age: 22,
    major: "Informatics",
  },
};

// Without destructing
console.log(`Destruction Object`);
console.log(`--Without destructing`);
console.log(req.body.name);
console.log(req.body.age);
console.log(req.body.major);

// Harus sesuai key yang berada pada object
// With destructing
console.log(`--With destructing`);
const { name, age, major } = req.body;
console.log(name);
console.log(age);
console.log(major);

// Array
const family = ["Michael", "Hannah", "Jordan"];

// Without destructing
console.log(`\nDestruction Array`);
console.log(`--Without destructing`);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

// Harus sesuai posisi yang berada pada array
// With destructing
const [husband, wife, son] = family;
console.log(`--With destructing`);
console.log(husband);
console.log(wife);
console.log(son);

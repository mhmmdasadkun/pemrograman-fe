const names = ["Michael", "Hannah", "Jonas"];

// forEach bertujuan untuk iterasi
names.forEach(function (name) { // Deklaratif proses
  console.log(`Nama: ${name}`);
});

// for (let i = 1; i < 11; i++) { // Imperatif proses
//   console.log(`perulangan ke ${i}`);
// }

// With Arrow Function
names.forEach((name) => console.log(`Nama: ${name}`));

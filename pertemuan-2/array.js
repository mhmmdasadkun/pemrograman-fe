const animals = ["Cat", "Dog", "Fish", "Bird"];

for (let i = 0; i < animals.length; i++) {
  console.log(`Hewan: ${animals[i]}`);
}

for (const animal of animals) {
  console.log(`Hewan: ${animal}`);
}

// console.log(animals[0], animals[1]);

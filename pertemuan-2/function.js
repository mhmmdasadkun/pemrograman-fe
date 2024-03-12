// const getAge = (bod) => {
//   const year = 2024;
//   const age = year - bod;

//   return age;
// };

const getAge = (bod = 1999) => 2024 - bod;
console.log(getAge(2003));

const animals = ["Cat", "Dog", "Fish", "Bird"];
const getAnimals = (animalsArray) => {
  let result = "";
  for (const animal of animalsArray) {
    result += `Hewan: ${animal}\n`;
  }
  return result;
};

console.log(getAnimals(animals));

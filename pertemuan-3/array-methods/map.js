const names = ["Michael", "Hannah", "Jonas"];

// map bertujuan untuk tranform/mengubah data.
const formattedName = names.map(function(name) {
    return `Mr/Mrs. ${name}`;
});
console.log(formattedName);

// With Arrow Function
const formattedNameArr = names.map((name) => `Mr/Mrs. ${name}`);
console.log(formattedNameArr);


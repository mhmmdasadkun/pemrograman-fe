const user = {
  name: "Aat Ganteng",
  age: 21,
  major: "Informatics",
};

console.log(user.name, user["name"]);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

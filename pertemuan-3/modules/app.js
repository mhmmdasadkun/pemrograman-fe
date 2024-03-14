// Without Modules
const users = [
  { name: "Jonas", age: 15 },
  { name: "Michael", age: 40 },
  { name: "Hannah", age: 35 },
];

const index = () => {
  users.forEach((user) => console.log(user));
};

const store = (user) => {
  users.push(user);
};

const main = () => {
  const user = { name: "Martha", age: 20 };

  store(user); // Lakukan penambahan user baru
  index(); // Lakukan pemanggilan data users
};

main(); // Jalankan fungsi utama main

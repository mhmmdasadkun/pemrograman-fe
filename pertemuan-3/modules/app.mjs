import { index, store } from "./controller.mjs";

const main = () => {
  const user = { name: "Martha", age: 20 };

  store(user); // Lakukan penambahan user baru
  index(); // Lakukan pemanggilan data users
};

main(); // Jalankan fungsi utama main

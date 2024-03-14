// Without rest parameters
const sum = (a, b, c, d, e) => {
  const hasil = a + b + c + d + e;
  return hasil;
};
console.log(`--Without rest parameters`);
console.log(sum(1, 2, 3, 4, 5));

// With rest parameters (Mencegah tidak menambahkan parameter satu-satu di function kalau parameter bertambah)
const sum_rest = (...numbers) => {
  let hasil = 0;

  for (const number of numbers) {
    hasil += number;
  }
  return hasil;
};
console.log(`--With rest parameters`);
console.log(sum_rest(1, 2, 3, 4, 5, 6));

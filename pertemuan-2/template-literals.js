const username = "Aat Ganteng";
const bod = 2003;
const currentYear = new Date().getFullYear();

/**
 * Membuat string menggunakan template literals.
 * Dapat menggunakan multiline
 * Dapat melakukan interpolasi
 */

const greeting = `
Hello, my name ${username}.
My age is ${currentYear - bod}
`;

console.log(greeting);
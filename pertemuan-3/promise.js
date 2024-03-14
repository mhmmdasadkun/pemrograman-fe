const download = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Downloading...");
    }, 3000);
  });
};

const verify = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Verify file...");
    }, 2000);
  });
};

const notify = () => {
  console.log("Download completed.");
};

const main = () => {
  download()
    .then((results) => {
      console.log(results);
      return verify();
    })
    .then((results) => {
      console.log(results);
      return notify();
    })
    .catch((error) => {
      console.log("error");
    });
};

// Hasil sesuai hitungan setTimeout
main();

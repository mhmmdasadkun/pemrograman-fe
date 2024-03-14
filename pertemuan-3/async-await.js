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

const main = async () => {
  console.log(await download());
  console.log(await verify());
  notify();
};

// Hasil sesuai hitungan setTimeout
main();

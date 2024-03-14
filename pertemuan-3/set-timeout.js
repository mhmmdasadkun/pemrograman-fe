const download = () => {
  setTimeout(() => {
    console.log("Downloading...");
  }, 3000);
};

const verify = () => {
  setTimeout(() => {
    console.log("Verify file...");
  }, 2000);
};

const notify = () => {
  console.log("Download completed.");
};

const main = () => {
  download();
  verify();
  notify();
};

// Hasil sesuai hitungan setTimeout
main();

const spinner = function (spinTime) {
  const writeArrays = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
  let currentSymbol = 0;

  for (let i = 0; i <= spinTime; i = i + 200) {
    setTimeout(() => {
      process.stdout.write(writeArrays[currentSymbol]);
    }, i);
    currentSymbol++;
    if (currentSymbol > 3) currentSymbol =  0;
  }
  setTimeout(() => {
    console.log();
  }, spinTime);
};

spinner(5000);
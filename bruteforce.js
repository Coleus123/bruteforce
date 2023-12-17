const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите первую строку: ', (str1) => {
  rl.question('Введите вторую строку: ', (str2) => {
    const count = bruteForceSearch(str1, str2);
    console.log(`Количество вхождений: ${count}`);
    rl.close();
  });
});

function bruteForceSearch(str1, str2) {
  let count = 0;
  const hash1 = hash(str1);

  for (let i = 0; i <= str2.length - str1.length; i++) {
    const substring = str2.substring(i, i + str1.length);
    const subhash = hash(substring);

    if (subhash === hash1 && substring === str1) {
      count++;
    }
  }

  return count;
}

function hash(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }

  return hash;
}
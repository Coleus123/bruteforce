const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Введите первую строку: ', (str1) => {
  rl.question('Введите вторую строку: ', (str2) => {
    const results = bruteForceSearch(str1, str2);
    console.log(`Количество вхождений: ${results}`);
    rl.close();
  });
});

function bruteForceSearch(str1, str2) {
  let results = new Array();
  const hash1 = hash(str1);

  for (let i = 0; i <= str2.length - str1.length; i++) {
    const substring = str2.substring(i, i + str1.length);
    const subhash = hash(substring);
    if (subhash == hash1){
		for(let j = 0; j < str1.length; j++){
			if (substring[j] === str1[j]){
				if (j == str1.length - 1){
					results.push(i + 1);
				}
				else{
				continue;
				}
			}
			else {
				break;
			}
			
		}
    }
  }
  return results;
}

function hash(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }

  return hash;
}

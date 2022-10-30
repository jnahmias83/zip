function zip(str) {
    let letters = [];
    letters[0] = str[0];
  
    for (let i = 1; i < str.length; i++) {
      if (str[i] != str[i - 1]) letters.push(str[i]);
    }
    return letters;
  }
  
  console.log(zip("AACCCATGGTTGG"));
  
  function zipAdvanced(str) {
    let count = 1;
    let letters = [[`'${str[0]}',${count}`]];
    for (let i = 1; i < str.length; i++) {
      let index = 1;
      if (str[i] != str[i-1]) {
        count = 1;
        index++;
        letters[index] = [`'${str[i]}',${count}`];
      } 
      else if (str[i] == str[i-1]) {
        letters[index] = [[`'${str[i - 1]}',${count++}`]];
      }
    }
    return letters;
  }
  
  console.log(zipAdvanced("AACCCATGGTTGG"));
  
function rot13(str) {
  let splittedStr = str.toUpperCase().split("");

  let cipheredWord = splittedStr.map(element => {
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 77) {
      return String.fromCharCode(element.charCodeAt(0) + 13);
    }

    if (element.charCodeAt(0) > 77 && element.charCodeAt(0) <= 90) {
      return (String.fromCharCode(element.charCodeAt(0) - 13));
    }

    return element;

  }).join("");

  return cipheredWord;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
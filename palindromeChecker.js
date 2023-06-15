function palindrome(str) {
    let letters = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let reversedLetters = letters.split("").reverse().join("");

    return letters === reversedLetters;
}

console.log(palindrome("nope"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
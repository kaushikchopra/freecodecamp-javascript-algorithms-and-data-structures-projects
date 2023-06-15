function telephoneCheck(str) {
    let regexList = [/^(\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/,
        /^1 (\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/,
        /^1?\(?(\d{3})\)?(\d{3})[\s\-]?(\d{4})$/,
        /^1 \((\d{3})\)\s(\d{3})[\s\-]?(\d{4})$/]

    return regexList.some(rx => rx.test(str));
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("(555)5(55?)-5555"));
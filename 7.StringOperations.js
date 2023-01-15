// String Compare
// Upper or Lower Case
// Trim Unwanted Spaces at Beginning and End of String


// String Compare
    let str1 = "I Love Bangladesh"
    let str2 = "I Love Bangladesh"

    console.log("Are str1 and str2 equal?: ", str1 === str2)

    // '===' is case sensetive.
    let str3 = "I Love Bangladesh"
    let str4 = "I love bangladesh"
    console.log("Are str3 and str4 equal?: ", str3 === str4)

// UpperCase
    console.log(str1.toUpperCase())

// Lower Case
    console.log(str2.toLowerCase())


// Trim Unwanted Spaces at Beginning and End of String
    let str5 = "   I love Bangladesh    "

//Remove spaces both at the beginnig and end
    console.log("str1 with Trim: ", str5.trim())

 //Remove spaces at the beginnig (left)
    console.log("str1 with Trim Left: ", str5.trimLeft())

//Remove spaces at the end (right)
    console.log("str1 with Trim Right: ", str5.trimRight())
    console.log("str1 with Trim End: ", str5.trimEnd())
// String Length and Index of its Characters
    console.log("Index of A: ",str5.indexOf('A')) // return -1 beacuse A is not present in the string
    console.log("Index of I: ",str5.indexOf('I'))
    console.log("Index of a: ",str5.indexOf('a'))// return 11 beacuse a is not present in the string

// Searching in String ('includes' Keyword)
    console.log(str5.includes('Bangladesh')) // return true or false
// Searching at the Beginning and Ending of a String ('startsWith' Keyword)
    console.log(str5.startsWith('I'))  // "   I love Bangladesh    "
    console.log(str5.startsWith(' ')) // print true
    console.log(str5.endsWith(' '))


// String replace
    let str = 'Learning JS is easy, I like JS programming!';
    let newStr = str.replace('JS','JavaScript');
    console.log(newStr);


// String search
    let str7 = "Learning JavaScript is fun!";
    str7.search("JavaScript")

    // Using Regular Expression
    let regex = /[0-9]/;
    let str8 = 'A crowd of 300 was expected, but only 105 showed up.';
    let index = str8.search(regex);

    // search() returns -1, if match is not found.

    console.log(index);
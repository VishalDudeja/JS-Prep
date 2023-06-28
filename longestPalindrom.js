var reverseString = function(str){
    console.log("str to be reversed", str)
    let reveresedStr= str.split("").reverse().join("")
    return reveresedStr
}

var removeLastChar = function(str){
    let strToModify =  str.split("")
    strToModify.splice(-1)
    let lastString = strToModify.join("")
    console.log("strToModify", lastString)
    return lastString
}

const longestPalindrome = function(s) {
    let receivedStr = s
    console.log("recevd", receivedStr )
    if(reverseString(receivedStr) === receivedStr) {
        console.log("Inside first")
        return receivedStr;
    }else {
        let newStr = removeLastChar(receivedStr)
        console.log("Inside second")
        return longestPalindrome(newStr)

    }
};


const newFn = (num) =>{
    let a = 10 ;
    if(num > a){
        return true;
    }else {
        console.log("first")
    }
}


console.log("final result", longestPalindrome("babad"))



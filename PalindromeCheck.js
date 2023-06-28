// A Palindrom is a word or sentence that's spelled the same way forwards and backwards, ignoring punctuation, case and spacing.


const checkForPalindrom = function(value){
    let receveiedVal = value

    let reveredVal = value.toString().toLowerCase().split("").reverse().join("")

    if(reveredVal === receveiedVal.toString().toLowerCase()) return true ;
    return false;
}

console.log(checkForPalindrom("racecar"))
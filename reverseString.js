// function to reverse an string

const reverseString = function(str){

    let receivedStr = str

    // as we know arrays have 'reverse' method not string
    // we can convert this string to array first
    //and reverse the array
    //and return the reversed aaray converted back to string again

    //convert to array, we can use split()

    // let arrOfStr = receivedStr.split("")
    // console.log(arrOfStr)

    // //reverse the converted arr
    // let reversedArray = arrOfStr.reverse()
    // console.log(reversedArray)

    // //covert arr back to str
    // let reversedStr = reversedArray.join("")
    // console.log(backToStr)


    // we can chain all the above mentioned method together as well

    let reversedStr = receivedStr.split("").reverse().join("")

    return reversedStr

}

reverseString("hello")



//reverse string using imperetive approach , i.e. without using any predefined methods

const reverseStringImperetive = function(str){
    let receivedStr = str

   let reversedStr = '';

   for(let i = receivedStr.length-1 ; i >= 0 ; i--){

        reversedStr += receivedStr[i]
    }

    console.log(reversedStr)

}

reverseStringImperetive("hello")
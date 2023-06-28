// countAmount().value() //0
// countAmount().lacs(2).value() // 200000
// countAmount().lacs(2).lacs(3).value() //50000
// countAmount().lacs(2).lacs(3).lacs(6).value() //110000
// countAmount().lacs(2).lacs(3).lacs(6).lacs(5).value() //110000


const countAmount = (countVal) =>{
    let countLacMultiplier = 100000 ;
    let totalCount = countVal ? countVal : 0;
    return {
        value : function(){
            if(!countVal) return 0;
            return countVal* countLacMultiplier;
        },
        lacs : function(lacsValue){
            return countAmount(totalCount + lacsValue)
        }
    }
}

// console.log(countAmount().value() )
// console.log(countAmount().lacs(2).value() )
// console.log( countAmount().lacs(2).lacs(3).value())
// console.log( countAmount().lacs(2).lacs(3).lacs(6).lacs(5).value())




//// Second largest in Array
const array = [32, 523, 5632, 920, 5500];

const findSecondLargest = (array) =>{
    let recievedArray = [...array]

    let largestNumber = recievedArray[0]
    let secondLargest = 0

    for(i=1 ; i < recievedArray.length ; i++){
        if(recievedArray[i]>largestNumber){
            secondLargest = largestNumber
            largestNumber = recievedArray[i]
        }else if(recievedArray[i] !== largestNumber &&  recievedArray[i] > secondLargest){
            secondLargest =recievedArray[i]
        }
    }

    return secondLargest;
}

 console.log(findSecondLargest(array))




/* print from 1 to 3 after 2 secs each */
 function y(){
    for(let i = 0 ; i < 4 ; i++){
    	setTimeout(()=> console.log(i), i*2000)
    }
}

y()
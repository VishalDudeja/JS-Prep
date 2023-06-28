// there is an nested array
// contains sub-arrays
//find the sub-aaray which has largest number in it
// test data -> [ [4,5,1,3], [13, 27, 18, 36], [32, 35, 37, 39] , [100, 1001, 857 ,1 ] ]

let testArr = [ [4,5,1,3], [13, 27, 18, 26], [1000, 1001, 857 ,1 ], [32, 35, 37, 39] ]

const subArrWithGreatestNumber = function(arr){

    let receveiedArr = [...arr]

    let largestNumberWhole = 0 ;
    

    let indexOfSubArray = 0 ;

    let arrOfAllLargestInAllSubArrs = []

    receveiedArr.forEach((eachSubArr, index) => {
        let largestNumberIndv = eachSubArr[0]
        eachSubArr.forEach(subArrNumbers => {
            if(subArrNumbers > largestNumberIndv ) {
                largestNumberIndv = subArrNumbers 
            }
        })

        arrOfAllLargestInAllSubArrs.push(largestNumberIndv)

        if(largestNumberIndv > largestNumberWhole ){
            largestNumberWhole = largestNumberIndv
            indexOfSubArray = index
        }
    })

    console.log(arrOfAllLargestInAllSubArrs)
    return receveiedArr[indexOfSubArray]
}

console.log(subArrWithGreatestNumber(testArr))
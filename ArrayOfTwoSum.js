// given arr = [2,7,0,5] , target = 9
// return an array with the index of two array elements summing up to target value that is 9 here.


// let arr = [2,0,0,7] 
// let arr = [2,7,2,7]
let arr = [0 , 2, 7, 10]

const arrayOfTwoSums = (array, target) =>{

    let receivedArr = [...array]


    let returnedIndexArr = []

    for(let j= 0 ; j <receivedArr.length ; j++){
        let intialIndex = j
        for(let i = 0 ; i < receivedArr.length ; i++){
            
            let intialVal = receivedArr[intialIndex]
    
            if(i > intialIndex ){
                if( (Number(intialVal) + Number(receivedArr[i])) === Number(target)){
                    returnedIndexArr.push(intialIndex);
                    returnedIndexArr.push(i)
                    return returnedIndexArr; 
                }
            }
        }
    
    }

    
    

}

console.log(arrayOfTwoSums(arr, 9)) ;
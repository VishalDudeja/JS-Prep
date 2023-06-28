// Find second largest number in array --------------------------- with sorting 

// let arr = [25, 22, 25, 22, 9, 25, 9, 13, 7, 16, 3, 8, 8, 16, 11, 10, 10, 10, 13 ]; 

const findSecondLargestWithSorting = (array) =>{
    let receivedArray = [...array]
    
    let sortedArray = receivedArray.sort((a,b) => b-a)
    
    let secondLargestNumber = sortedArray[0]
    
    for(let i = 0 ; i < sortedArray.length ; i++){
            if(i > 0 && (sortedArray[i] < secondLargestNumber) ){
                console.log("inside", sortedArray[i] )
                secondLargestNumber = sortedArray[i] 
                break;
            }
         console.log("outside", sortedArray[i] )
    }
    
    return secondLargestNumber ;
}

// console.log("result",findSecondLargest(arr))



// Find second largest number in array --------------------------- without sorting 

// Find second largest number in array
//Approach taken -> firt find the largest in array and remove it. And then find the largest again on updated array


let arr = [22, 25, 22, 9, 23, 9, 13, 7, 16, 3, 8, 8, 16, 11, 27, 10, 10, 13 ]; 


const removeLargestInAnyArray = (array) =>{
    let receivedArray = [...array]
        
    let largestNumber = receivedArray[0]
    let largestNumberIndex  = 0
    
    for(let i = 0 ; i < receivedArray.length ; i++){
            if(receivedArray[i] > largestNumber ){
                largestNumber = receivedArray[i] 
                largestNumberIndex = i
            }
    }
    
    receivedArray.splice(largestNumberIndex ,1)     
    return receivedArray ;
}

const findSecondLargestWithoutSorting = (array) =>{
    let receivedArray = [...array]
    
    let updatedArray = removeLargestInAnyArray(receivedArray)
        
    let secondLargestNumber = updatedArray[0]
    
    for(let i = 0 ; i < updatedArray.length ; i++){
            if(updatedArray[i] > secondLargestNumber ){
                secondLargestNumber = updatedArray[i] 
            }
    }
  
    return secondLargestNumber ;gy
}

console.log("result",findSecondLargestWithoutSorting(arr))


// Arr = [2 3 4 5 6 2 ]    

//a < b > c < d > e < f
  
 let aaray = [1,2,3, [4, [5, 5], 9], [10]]

// let aaray = [1,2,3, [4, 5, 9], [10]]

// let aaray = [1, [4, 9], [10]]

const flattenArray = (arr) =>{
    console.log("fn called")
  let receivedArr = [...arr]
  
  let newArr = []
  for(let i = 0 ; i < receivedArr.length ; i++){
    console.log("newArr", newArr)
        if(Array.isArray(receivedArr[i])){
            console.log("rr", i, receivedArr[i])
            // newArr = [...newArr, ...receivedArr[i]]

            // console.log("recursive result", flattenArray(receivedArr[i]))
            newArr.push(...flattenArray(receivedArr[i]))
        }else {
        newArr.push(receivedArr[i])
        }
    }

    return newArr;
}


console.log(flattenArray(aaray))
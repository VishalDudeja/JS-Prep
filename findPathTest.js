var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    const pathArray = path.split(".")
    let receivedObject = {...object}
    let finalResult  ;
    let currentObject = receivedObject
    pathArray.forEach(eachPath => {
        if( currentObject[eachPath]){
            currentObject = currentObject[eachPath] 
            finalResult = currentObject
        }else finalResult = currentObject[eachPath] ;

    })
    return finalResult;
};


console.log(findPath(obj, 'a.b.c.d.e'));
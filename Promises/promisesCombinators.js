//https://restcountries.eu/rest/v2/name/${c1}
//https://restcountries.eu/rest/v2/name/italy`)

const getJSON = async function (url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
            return response.json();
        })

        
        .then(data => data.slip.advice)
};

const checkTimeOut = function(sec){
    return new Promise(function(_, reject){
        setTimeout(()=>{
            reject(new Error("Request took too long!"))
        }, 1000*sec)
    })
};


/* checkTimeOut() */

(async function(){
    try{
        //const data = await  Promise.any([getJSON(`https://api.adviceslip.com/advice`), checkTimeOut(0.1) , getJSON(`https://api.adviceslip.com/advice`) ]);
        //const data = await Promise.allSettled([getJSON(`https://api.adviceslip.com/advice`), getJSON(`https://api.adviceslip.com/advice`),  ])
        const data = await  Promise.any([Promise.resolve("Success 1")])
        console.log("data: ", data)

    }catch (err){
        console.error(err)
    } 
})();



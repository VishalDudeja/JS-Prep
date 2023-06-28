let btn = document.querySelector("#user_search_btn");

const eventFn = () =>{
    console.log("clicked")
}

const debounce = (fn, delay) => {
    let timeOutID ;

    return function(...args){
        if(timeOutID) clearTimeout(timeOutID)
        timeOutID = setTimeout(()=>{
            fn(...args)
        }, delay)
    }
}

// console.log(debounce(eventFn ))

btn.addEventListener('click', debounce(eventFn , 3000 ))
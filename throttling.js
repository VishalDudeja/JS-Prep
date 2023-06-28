let btn = document.querySelector("#user_search_btn");

const eventFn = () =>{
    console.log("clicked")
}

 const throttling = (fn , delay) =>{
    let past = 0 ;

    return function(){
        let now = new Date().getTime()
        console.log(now , "now")

        if(now-past < delay) return ;

        past = now ;
        return fn()
    }
 }


btn.addEventListener('click', throttling(eventFn , 3000 ))
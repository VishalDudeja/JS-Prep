let userSearchButton = document.querySelector("#user_search_btn")
let userInput = document.querySelector("#user_name")
let userDetailsContainer = document.querySelector(".user_details_container")




const showUserDetails = (userData) =>{
    if(userData){

    let listOfRepos = userData
        let html = "" ;
        listOfRepos.forEach((eachRepo) =>  
            html += `<a target="_blank" href="${eachRepo.url}"><li>${eachRepo.url} </li></a> `
        ) 

        console.log("html", html)
        userDetailsContainer.innerHTML = html

    }
}

const fetchUserDetails = (userName) =>{
    console.log("fe")
    //let url = `https://api.github.com/users/${userName}`
    let url = `https://api.github.com/users/${userName}/repos`
    fetch(url, {
        method : "GET"
    })
    .then(response => {
        return response.json()
    })
    .then(data =>{
        if(data && data?.length > 0){
            showUserDetails(data)
        }else {
            if(data?.message == "Not Found"){
                alert("No user found with the given name.")
            }
        }
    })
    .catch(err => console.log(err))
}


const searchUser = () =>{
   let  enteredName = userInput.value;
   let finalName = enteredName.toString().toLowerCase().split(" ").join("")

   //
   fetchUserDetails(finalName)
}

//adding event listner
userSearchButton.addEventListener('click', searchUser)
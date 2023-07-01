// Event delegation is based on event bubbling

let categoryList = document.getElementById("category");

categoryList.addEventListener("click", (e) => {
	console.log(e.target);
	if (e.target.tagName == "LI") {
		//window.location.href = "/" + e.target.id;
	}
});

/*console.log("categoryList", categoryList);

let categoryList2 = document.querySelector("#category");

console.log("categoryList2", categoryList2);*/

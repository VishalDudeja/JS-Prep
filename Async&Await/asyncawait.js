function getRollNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("1234");
		}, 3000);
	});
}

async function printData() {
	console.log("testing before");
	//getRollNumber().then((data) => console.log(data));
	let rollNumberValue = await getRollNumber();
	console.log("testing after1");
	console.log("rollNumberValue", rollNumberValue);
	console.log("testing after2");
}

printData();

//Nama : Limbu, Josua
//Mobile Application Development
// 1.A
function helloWorld()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        },2000);
    })
};

// 1.B
const messages = async() => {
    const msg = await helloWorld();
    console.log(msg);
};

// 1.C
messages();

//2.Fetch

const ambilDataUser = () =>{
    fetch("https://reqres.in/api/users")
	.then((response) => response.json())
	.then((users) => console.log(users.data))
	.catch((err) => console.log("Pengambilan data gagal ${err.message}"));
};
    ambilDataUser();

// 3.async await

const ambilDataUsers= async () => {
    try{
	const response = await fetch("https://reqres.in/api/users")
	const users = await response.json();
    	console.log(users.data)
		users.forEach((item) => console.log(item.data.email));
		arr = users.data;
		arr.forEach((item) => console.log(item.email));
     } catch (err) {
console.log("Error acquiring data: $(err.message)");
}
};

ambilDataUser();

//4. Axios

const axios = require("axios");
const ambilDataUserAxios = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        console.log(response.data);
        response.data.forEach(({ name }) => console.log(name));
    }
    catch (error) {
        console.log('Error to get data ${error}');
    }
};
ambilDataUserAxios();
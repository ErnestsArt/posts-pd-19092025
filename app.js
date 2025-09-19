const title = document.getElementById("title");
const body = document.getElementById("body");

async function generatePost(){
    try {
        const res = await fetch (' https://jsonplaceholder.typicode.com/posts');
        const json = await res.json();
        console.log(json);
    } catch (error) {
        console.log("nav labi")
    }
}

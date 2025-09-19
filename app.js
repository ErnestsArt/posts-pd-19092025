const title = document.getElementById("title");
const body = document.getElementById("body");

async function generatePost(){
    try {
        const res = await fetch (' https://jsonplaceholder.typicode.com/posts');
        const json = await res.json();
        // console.log(json)
        const newArr = json.map(showPosts);

        
        

    } catch (error) {
        console.log("nav labi")
    }   

    }

    function showPosts(newArr) {
    
    document.getElementById("posts").innerHTML = newArr.join("");
    }




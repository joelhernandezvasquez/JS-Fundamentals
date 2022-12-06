
let  posts = [];
const postSection = document.querySelector(".post");

window.onload = ()=>{
 
     // resolving a promise
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=> response.json())
    .then((results)=> {
      posts = results.slice(0,10);
      createPost(posts);
     // need to create the cards
    })
    .catch((error)=>{
        console.log(error.message);
    })
// needs to create the div and renderes
  

}
const createPost = (posts) =>{
    posts.forEach((post) =>{
        const article = document.createElement("article");
        const id = document.createElement("span");
        const description = document.createElement("p");
         
        id.textContent = post.id;
        description.textContent = post.title;

        article.appendChild(id);
        article.appendChild(description);
        postSection.appendChild(article);

      })
}


// needs to create a funcion-promised based with syncronous values

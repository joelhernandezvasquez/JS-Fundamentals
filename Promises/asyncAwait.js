
let  posts = [];
let comments = [];
const postSection = document.querySelector(".post");
const commentSection = document.querySelector(".comment");

window.onload = async ()=>{

  const [postValues,commentValues] = await Promise.all([fetchPost(),fetchComment()]);

 createPost(postValues);
 createComments(commentValues);
}

const fetchPost = async () =>{
   try{
     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
     const posts = await response.json();
     return posts.slice(0,10);
   }
    catch(err){
        throw new Error(err.message);
    }     
}

const fetchComment = async () =>{
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json()
      return comments.slice(0,10);
    }
    catch(err){
        throw new Error(err.message);
    }
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
const createComments = (comments) =>{
    comments.forEach((comment)=>{
        const article = document.createElement("article");
        const id = document.createElement("span");
        const description = document.createElement("p");

        id.textContent = comment.id;
        description.textContent = comment.body;


        article.appendChild(id);
        article.appendChild(description);
        commentSection.appendChild(article);


        
    }
)}


document.addEventListener("DOMContentLoaded", ()=>{
  updatePost();
});


const divMural = document.querySelector(".containerMural");


function updatePost(){
  let url = 'http://localhost:3000/api/all';
  fetch(url).then(res=>{
    return res.json();
  }).then(json=>{
    let postElements = '';
    let posts = JSON.parse(json);
   

    posts.forEach(element => {
      let postElement = `
        <div id=${element.id}>          
          <div class="boxMural">
          <div class="remove">
            <h1 class="tittleMural">${element.tittle}</h1>
            <button onclick="remove(this)" id="${element.id}"><ion-icon name="trash-outline"></ion-icon></button>
          </div>
            <div>${element.description}</div>
          </div>
        </div> `;
      

        postElements += postElement;
      });     

      divMural.innerHTML = postElements;
    })
};

function newPost(){

  let tittle = document.getElementById('titulo').value;
  let description = document.getElementById('descricao').value;
  let post = {tittle, description};
  console.log(post)
  
  if(post.tittle == ''){
    alert("Preencha todos os campos!")
  }else if(post.description == ''){
    alert("Preencha todos os campos!")
  }else{
    const options = {
      method: 'POST', 
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(post)
    }  
  
    fetch('http://localhost:3000/api/new', options).then(res=>{
      updatePost();
      document.getElementById('titulo').value = '';
      document.getElementById('descricao').value = '';
    })
  }
 
}

const button = document.querySelector('#button').addEventListener('click', newPost);

function remove(element){
  let id = element.id;

  const options = {method:'DELETE'};

  fetch(`http://localhost:3000/api/del/${id}`, options).then(res=>{
      updatePost();
    
  });
}
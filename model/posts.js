module.exports = {
   posts: [
   
  ],

  getAll(){
    return this.posts;
  },

  newPost(tittle, description){
    return this.posts.push({id:generateId(), tittle, description});
  },

  deletePost(id){
    this.posts = this.posts.filter(post=>{
      return post.id != id;
    })
  }
}

//Função para gerar um ID randômico.
function generateId(){
  //toString => relaciona o alfabeto que contém 26 letras; substring(2, 9) => 2 -> pege o id gerado depois dos dois primeiros dígitos. 9-> pege os outros números restante. 
  return Math.random().toString(36).substring(2, 9);
}
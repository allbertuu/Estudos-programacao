// let divPosts = document.getElementById('posts');

// const posts = [
//   { title: 'Post One', text: 'This is the post 1!' },
//   { title: 'Post Two', text: 'This is the post 2!' }
// ]

// let output = '';

// function imprimirCadaPost(post) {
//   output += `<li>${post.title}</li>`;
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach((post, index) => imprimirCadaPost(post))
//     divPosts.innerHTML = output;
//   }, 1000)
// }

// getPosts();

// function firstFunction() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Esperou isso aqui!')
//       resolve()
//     }, 2000)
//   })
// }

// async function secondFunction() {
//   console.log('Iniciou')

//   await firstFunction();

//   console.log('Terminou')
// }

// secondFunction()

let el = document.getElementById('users')

async function getUser(id) {
  //pegar dados da API - só o elemento (array) com esse ID
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .catch(err => console.log(`Error: ${err}`))
  //transformar essa resposta em um arquivo json
  const user = await res.json();
  //retornar o arquivo json - só o elemento (array) com esse ID
  return user;
}

async function displayUser(id) {
  if (id === 0) {
    return
  }
  const user = await getUser(id);

  el.innerHTML = `<li>${user.name}</li>`
}

displayUser(5)
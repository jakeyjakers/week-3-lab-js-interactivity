console.log('asdf')

const message = document.querySelector('#message')

const addMovie = function(event){
    event.preventDefault()
   const inputField = document.querySelector('input')
   const movie = document.createElement('li')
   const movieTitle = document.createElement('span')
   movieTitle.textContent = inputField.value
   movieTitle.addEventListener('click', crossOffMovie)
   movie.appendChild(movieTitle)
   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'X'
   deleteBtn.addEventListener('click', deleteMovie)
   movie.appendChild(deleteBtn)
   const ul = document.querySelector('ul')
   ul.appendChild(movie)
   inputField.value = ''
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

const deleteMovie = function(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted.`
    revealMessage()
}

const crossOffMovie = function(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back.`
    }
    revealMessage()
}

const revealMessage = function(){
    message.classList.remove('hide')
    setTimeout(() =>{
        message.classList.add('hide')
    }, 2000 )
}
console.log('asdf')

const message = document.querySelector('#message')

const watchedListMessage = document.querySelector('#message-2')

const addMovie = function(event){
    event.preventDefault()
   const inputField = document.querySelector('input')
   const movie = document.createElement('li')
   const movieTitle = document.createElement('span')
   movieTitle.textContent = inputField.value
   movieTitle.addEventListener('click', crossOffMovie)
   movieTitle.addEventListener('dblclick', moveToWatched)
   movie.appendChild(movieTitle)
   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'X'
   deleteBtn.addEventListener('click', deleteMovie)
   movie.appendChild(deleteBtn)
   const ul = document.getElementById('ul-1')
   ul.appendChild(movie)
//    message.textContent = `${movieTitle.textContent} added to list.`
//    revealMessage()
    addedMessage(movieTitle)
   inputField.value = ''
   
   
}

const addedMessage = function(movieTitle){
    message.textContent = `${movieTitle.textContent} added to list.`
    revealMessage()
}

const form = document.querySelector('form')

form.addEventListener('submit', addMovie)

const deleteMovie = function(event){
    event.target.parentNode.remove()
    if(event.target.idList(message)){
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted.`
    } else {
        watchedListMessage.textContent = `${event.target.parentNode.firstChild.textContent} deleted.`
    }
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

const moveToWatched = function(event){
   const clonedMovie = event.target.parentNode.firstChild.cloneNode(true)
   event.target.parentNode.remove()
   message.textContent = `${event.target.parentNode.firstChild.textContent} added to watched list.`
   const watchedList = document.getElementById('ul-2')
   const deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'X'
   deleteBtn.addEventListener('click', deleteMovie)
   clonedMovie.appendChild(deleteBtn)
   watchedList.appendChild(clonedMovie)
   revealMessage()

} 

const revealMessage = function(){
    message.classList.remove('hide')
    setTimeout(() =>{
        message.classList.add('hide')
    }, 2000 )
}
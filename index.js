const cl = thing => console.log(thing)


message.textContent = document.querySelector('message')

cl('hello world')
addMovie = event => { 
    event.preventDefault()
    inputField = document.querySelector('Input').value
    movie = document.createElement('li')
    movieTitle = document.createElement('span')

    movieTitle.textContent = inputField
   
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    deleteBtn = document.createElement('movie')
    deleteBtn.textContent = '      [X]'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    movieTitle.addEventListener('click' , crossOffMovie)

    document.querySelector('Input').value = ''
    }
document.querySelector('form').addEventListener('submit', addMovie)


function deleteMovie(event) {
event.target.parentNode.remove()

message.textContent = 'Movie Destroyied '

}
crossOffMovie = (event) => {
   
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched'}
    else{message.textContent = 'Movie added back'}  

} 

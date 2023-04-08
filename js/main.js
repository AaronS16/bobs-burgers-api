document.querySelector('button').addEventListener('click', getCharacter)


function getCharacter() {

  let choice = Math.floor(Math.random() * 503)
fetch(`https://bobsburgers-api.herokuapp.com/characters/?limit=`)
  .then(res => res.json())
  .then(data => {
    console.log(data[`${choice}`])
    document.querySelector('.name').innerText = data[`${choice}`].name
    document.querySelector('img').src = data[`${choice}`].image
    document.querySelector('.episode').innerText = data[`${choice}`].firstEpisode
    document.querySelector('.voice').innerText = data[`${choice}`].voicedBy
    // document.querySelector('.wiki').innerText = data[`${choice}`].wikiUrl
    
  })
}
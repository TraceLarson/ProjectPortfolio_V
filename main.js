(function(){
  console.log('welcome')

  const searchBar = document.getElementById('search-bar')
  const displayImage = document.getElementById('display-image')
  const submitButton = document.getElementById('submit')

  submitButton.addEventListener('click', (e) =>{
    e.preventDefault()
    showImage(e)
  })


  function showImage (e) {
    console.log('Show Image function')
    let url = Utils.unsplashRandomPic(searchBar.value)
    fetch(url, {method: 'GET', timeout: 3000}).then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error('Bad response from server')
    }).then(dataJson => {
      console.log('INSIDE FETCH: ' + JSON.stringify(dataJson[0].urls.custom))
      // return JSON.stringify(dataJson[0].urls.custom)
      return dataJson[0].urls.custom
    }).then(string => {
      console.log('showImage function: ' + string)
      return displayImage.innerHTML = `<img src="${string}"/>`
    })
  }


})();

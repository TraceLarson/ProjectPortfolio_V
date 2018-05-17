
function initMap() {console.log("ok")}
(function(){
  console.log('welcome')

  const searchBar = document.getElementById('search-bar')
  const stateBar = document.getElementById('state-bar')
  const submitButton = document.getElementById('submit')
  const displayMap = document.getElementById('display-map')
  const displayImage = document.getElementById('display-image')
  const displayWeather = document.getElementById('display-weather')



  submitButton.addEventListener('click', (e) =>{
    e.preventDefault()
    showMap(e)
    showImage(e)
    showWeather(e)
  })

  showMap = (e) => {
    var geocoder = new google.maps.Geocoder()
    var latlng = new google.maps.LatLng(-34.397, 150.644)
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    var map = new google.maps.Map(displayMap, mapOptions)

    codeAddress()

    function codeAddress(){
      var address = `${searchBar.value}, ${stateBar.value}`
      geocoder.geocode( { 'address': address}, (results, status) => {
        if (status == 'OK'){
          map.setCenter(results[0].geometry.location)
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          })
        }else
          throw new Error('Geocoder was unsuccessful')
      })
    }

  }

  showImage = (e) => {
    console.log('Show Image function')
    let url = Utils.unsplashRandomPics(searchBar.value, 10, 100, 100)
    fetch(url, {method: 'GET', timeout: 3000}).then(response => {
      if (response.ok)
        return response.json()
      else
        throw new Error('Unsplash images Bad response from server')
    }).then(dataJson => {
      // return JSON.stringify(dataJson[0].urls.custom)
      dataJson.forEach(pic => {
        let img = document.createElement('img')
        img.setAttribute('src', pic.urls.custom)
        return  displayImage.appendChild(img)
      })
    })
  }

  showWeather = (e) => {
    console.log('Show Weather function')
    // weather is an object literal that contains urls fro information
    let weather = Utils.weatherUnderground(searchBar.value, stateBar.value )
    // use full information FETCH weather.conditions:
    // .current_observation
    //      .weather .temperature_string, .wind_string .icon_url
    // weather.radar url for animated radar of area
    // user full information FETCH weather.forecast
    // .forecast.txt_forecast.forecastday[i].
    //      .icon_url .title .fcttext

    fetch(weather.conditions, {method: 'GET', timeout: 3000}).then(response => {
      if(response.ok)
        return response.json()
      else
        throw new Error('Weather conditions bad response from server')
    }).then(dataJson => {
      let weatherString = dataJson.current_observation.weather
      let weatherIconUrl = dataJson.current_observation.icon_url
      let temperatureString = dataJson.current_observation.temperature_string
      let windInfo = dataJson.current_observation.wind_string

      let weatherDisplay = document.createElement('ul')

      let weatherItem1 = document.createElement('li')
      weatherItem1.innerHTML = `<img src="${weather.radar}" />`
      weatherDisplay.appendChild(weatherItem1)

      let weatherItem2 = document.createElement('li')
      weatherItem2.innerHTML = `<img src="${weatherIconUrl}" />`
      weatherDisplay.appendChild(weatherItem2)

      let weatherItem3 = document.createElement('li')
      weatherItem3.innerHTML = `<h2>${weatherString}</h2>`
      weatherDisplay.appendChild(weatherItem3)

      let weatherItem4 = document.createElement('li')
      weatherItem4.innerHTML = `<p>${temperatureString}</p>`
      weatherDisplay.appendChild(weatherItem4)

      let weatherItem5 = document.createElement('li')
      weatherItem5.innerHTML = `<p>${windInfo}</p>`
      weatherDisplay.appendChild(weatherItem5)

      return displayWeather.appendChild(weatherDisplay)
    })

  }

})();

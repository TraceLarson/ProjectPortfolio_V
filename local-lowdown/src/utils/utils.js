export class Utils {
  constructor() {
    console.log('Accessing Utility Class')
  }

  // //Caclulate Miles per Gallon
  // static calcMpg(range, fuelCapacity) {
  //   var mpg = range / fuelCapacity
  //   return parseFloat(mpg).toFixed(1)
  // }

  // //Calculate Dog years from Human years
  // static calcDogYears(dob, size) {
  //   // This function takes in a string of format mm-dd-yyyy for the date of birth of a dog
  //   // and a string of "small" "medium" or "large. Reasoning being that AKC shows that a
  //   // dogs age depends on its overall size. All dogs are the same age until they are
  //   // over 5 human years old. Then the larger dogs age faster.
  //
  //   var dobYear = new Date(dob).getFullYear()
  //   var dobMonth = new Date(dob).getMonth() + 1
  //   var dobDay = new Date(dob).getDate() + 1
  //   var todayDate = new Date()
  //   var todayYear = todayDate.getFullYear()
  //   var todayMonth = todayDate.getMonth() + 1
  //   var todayDay = todayDate.getDate()
  //
  //   //check to see if month and day are before current month and day
  //   if (dobYear > todayYear || (dobYear === todayYear && dobMonth > todayMonth) ||
  //       (dobYear === todayYear && dobMonth === todayMonth && dobDay > todayDay)) {
  //     alert('Your Dog is from the future?...try again pls :)')
  //     return 0
  //   }
  //   else {
  //     var humanYears = todayYear - dobYear
  //     if (todayMonth > dobMonth)
  //       humanYears = humanYears
  //     else if (todayMonth === dobMonth && todayDay >= dobDay)
  //       humanYears = humanYears
  //     else {
  //       humanYears = humanYears - 1
  //     }
  //
  //     //Set new variable dogyears to current human years.
  //     var dogYears = humanYears
  //
  //     //Conditionals to check the age of the dog and use predetermined values if they
  //     // are between 0 and 5 human years
  //     //Checks if the age is less than one and returns a decimal value for the age.
  //     if (dogYears < 1) {
  //       var monthAge = parseFloat((todayMonth - dobMonth) * (12 / 15))
  //       dogYears = monthAge
  //     }
  //     else if (dogYears === 1)
  //       dogYears = 15
  //     else if (dogYears === 2)
  //       dogYears = 24
  //     else if (dogYears === 3)
  //       dogYears = 28
  //     else if (dogYears === 4)
  //       dogYears = 32
  //     else if (dogYears === 5)
  //       dogYears = 36
  //     else if (dogYears > 5) {
  //       if (size === 'small') {
  //         dogYears = 36 + ((dogYears - 5) * 4)
  //       }
  //       if (size === 'medium') {
  //         dogYears = 36 + (dogYears - 5) * 4.5
  //       }
  //       if (size === 'large') {
  //         dogYears = 36 + (dogYears - 5) * 5
  //       }
  //     }
  //     return dogYears
  //   }
  // }

  //Use Unsplash API to get random pic URL
  static unsplashRandomPics(query, count, width, height) {
    //Gets a random image from unsplash and returns the url.
    // https://api.unsplash.com/photos/random/?count=1&query=dogs&w=200&h=200&orientation=squarish&client_id=e2a508587e823dd93b8031994e2420ed1a539716b750ed67e78b3caa09db950f
    // let applicationID = '24544'
    let accessKey = 'e2a508587e823dd93b8031994e2420ed1a539716b750ed67e78b3caa09db950f'
    // let secretKey = 'c236d7f56c0603c65226d16da075f5c46e7e7a4dfaffebd8954eb582be414732'
    let api = 'https://api.unsplash.com/photos/random/?'
    let imageQuery = () => {
      if (query == null)
        return 'dog'
      else
        return query
    }

    let imageCount = () => {
      if (count == null)
        return 1
      else
        return count
    }
    let imageWidth = () => {
      if (width == null)
        return 200
      else
        return width
    }
    let imageHeight = () => {
      if (height == null)
        return 200
      else
        return height
    }

    let url = `${api}count=${imageCount()}&query=${imageQuery()}&w=${imageWidth()}&h=${imageHeight()}&orientation=squarish&client_id=${accessKey}`
    console.log(url)

    return url

  }//End unsplashRandomPic

  //User weatherUnderground API to retrieve weather information
  static weatherUnderground(cityQuery, stateQuery){
    // returns an object of weather information URLS from weather underground.
    cityQuery = cityQuery.toLowerCase()
    if (cityQuery.includes(' ')){
      cityQuery = cityQuery.replace(' ', '_')
    }
    console.log(cityQuery, stateQuery)


    let api = 'http://api.wunderground.com/api/'
    let accessKey = '881b368fd778534d'
    let conditions = `/conditions/q/${stateQuery}/${cityQuery}.json`
    let animatedRadar = `/animatedradar/animatedsatellite/q/${stateQuery}/${cityQuery}.gif?num=8&delay=25&interval=30`
    let tenDayForecast = `/forecast10day/q/${stateQuery}/${cityQuery}.json`

    let weatherObject = {
      conditions : `${api}${accessKey}${conditions}`,
      radar : `${api}${accessKey}${animatedRadar}`,
      forecast : `${api}${accessKey}${tenDayForecast}`
    }

    console.log(weatherObject.conditions)
    return weatherObject
    //-----------EXAMPLE USAGE-------------------
   /* showWeather = (e) => {
      console.log('Show Weather function')

      // weather is an object literal that contains urls fro information
      let weather = Utils.weatherUnderground(searchBar.value, stateBar.value )

      // use full information FETCH weather.conditions:
      // .current_observation
      // ------>.weather .temperature_string, .wind_string .icon_url
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
      }) */

  }//End weatherUnderground

  // // GoogleMaps API info.
  // static googleMaps(){
  //   // let apiKey = 'AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw'
  //   // let apiUrl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBorZD9Cb_bxgM6rZKwlrqTWTNX_O1n2kw&callback=initMap`
  // }

  // //Get average of any amount of arguments
  // static getAverage(...args) {
  //   var avg = 0
  //   args.forEach((arg) => {
  //     avg += arg
  //   })
  //   avg = avg / args.length
  //   console.log(avg)
  //   return avg
  // }

  // //Convert inches to feet and inches
  // static feetAndInches(inches) {
  //   //returns an array where [0] is the feet and [1] is the remaining inches
  //   var remainingInches = inches % 12
  //   var feet = (inches - remainingInches) / 12
  //
  //   return [feet, remainingInches]
  // }

  // //Convert feet w/ or w/out decimal to inches
  // static feetToInches(feet){
  //   var footString = feet.toString();
  //   if(footString.includes('.')){
  //     console.log('Value Entered: ' + feet)
  //     var partialFoot =  footString.slice(footString.indexOf('.')+1)
  //     console.log('partial foot: ' + partialFoot)
  //     var partialFootInches = () => {
  //       if(partialFoot.length === 1)
  //         return Math.ceil((partialFoot * 12)/10)
  //       else if(partialFoot.length === 2)
  //         return Math.ceil((partialFoot *12)/100)
  //       else{
  //         return Math.ceil((partialFoot.slice(0,2) * 12)/100)
  //       }
  //     }
  //     console.log('partial foot inches: ' + partialFootInches())
  //     var wholeFeet =  feet - footString.slice(footString.indexOf('.'))
  //     console.log('Whole Feet: ' + wholeFeet)
  //     var inches = wholeFeet * 12
  //     console.log('inches from whole feet: ' + inches)
  //
  //     return inches + partialFootInches()
  //   }
  //   else{
  //     return feet * 12
  //   }
  // }

  // //Convert fahrenheit degrees to celsius degrees
  // static fahrenheitToCelsius(degrees){
  //   return parseFloat((degrees - 32) / 1.8).toFixed(1)
  // }

  // // Convert celsius degrees to fahrenheit degrees
  // static celciusToFahrenheit(degrees){
  //   return parseFloat(degrees * 1.8 + 32).toFixed(1)
  // }

  // //Converts string to piglatin
  // static toPigLatin(word){
  //   word = word.toLowerCase()
  //   let array = word.split('')
  //   let vowels = ['a','e','i','o','u']
  //   let pig = ''
  //   for (let i = 0; i < vowels.length-1; i++){
  //     for(let y = 0; y < word.length-1; y++){
  //       if(word[y] === vowels[i]){
  //         for(let x = y; x < word.length; x++){
  //           pig = pig + word[x]
  //         }
  //         for(let n = 0; n < y; n++){
  //           pig = pig + word[n]
  //         }
  //         return pig + 'ay'
  //       }
  //     }
  //   }
  // }

  // //Converts minutes to time format
  // static minutesToTime(minutes){
  //   console.log(`minutesToTime function: ${minutes}`)
  //   if(isNaN(minutes))
  //     return minutes
  //   else {
  //     let residualMinutes = minutes % 60
  //     if (residualMinutes < 10)
  //       residualMinutes = '0' + residualMinutes
  //     let hours = (minutes - residualMinutes) / 60
  //     return `${hours}:${residualMinutes}`
  //   }
  // }


}//END OF UTILS

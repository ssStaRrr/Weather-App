async function getData(selectedCity) {
    const apiKey = "9c8e0fad593982d44b968013791e1ba0"
    const city = selectedCity;
    const option = "units=metric"

    // URL Template: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
    let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${option}`

    try {
        // // async/await yapısına eş değer alternatif Promise yapısı ile data fetch etmek
        // let data = await fetch(baseUrl)
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(res => {
        //         return res
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })
        // return data;

        // alternatıf yol olan Async/await yapısı ile data fetch etmek
         const data = await fetch(baseUrl)
         const weather = await data.json()
         
        return weather;
    } catch (err) {
        console.log(err)
    }

}

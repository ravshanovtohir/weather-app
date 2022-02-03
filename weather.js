let hiLow = document.querySelector(".hi-low")
let weather = document.querySelector(".weather")
let cityWeather = document.querySelector(".city")
let input = document.querySelector(".search-box")
let dateWeather = document.querySelector(".date")
let temperatureWeather = document.querySelector(".temp")
let xatoli = document.querySelector(".xatolik")



input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        async function request() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=615423b9df6b4348a9e5dc0901384fdc`)
            const users = await response.json()
            try {
                xatoli.textContent = null
                cityWeather.textContent = users.name
                let date = new Date()
                date = (date.getDate().toString().padStart(2, 0)) + " : " + (date.getMonth() + 1).toString().padStart(2, 0) + " : " + date.getFullYear().toString()
                dateWeather.textContent = date
                temperatureWeather.textContent = ((users.main.temp - 273 | 0) + " " + "°C")
                let { weather: [{ main: x }] } = users
                weather.textContent = x
                hiLow.textContent = ((users.main.temp_min - 273 | 0) + " " + "°C" + " / " + +(users.main.temp_min - 273 + 5 | 0) + " " + "°C")
                input.value = null
                console.log(users);
            } catch (error) {
                hiLow.textContent = null
                weather.textContent = null
                cityWeather.textContent = null
                    // dateWeather.textContent = null
                temperatureWeather.textContent = null
                input.value = null
                xatoli.textContent = "Nomalum Xudud"
                throw new Error("Error")

            }

        }
        request()
    }
})
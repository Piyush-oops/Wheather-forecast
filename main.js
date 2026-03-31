const form = document.querySelector('form')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const input = document.querySelector('input')
const img = document.querySelector('img')
const p = document.querySelector('p')


const aqi1 = document.getElementById('f')
const aqi2 = document.getElementById('s')
const aqi3 = document.getElementById('t')
const aqi4 = document.getElementById('fr')
const aqi5 = document.getElementById('fi')

const av1 = document.getElementById('av1')
const av2 = document.getElementById('av2')
const av3 = document.getElementById('av3')
const av4 = document.getElementById('av4')
const av5 = document.getElementById('av5')

const al1 = document.getElementById('al1')
const al2 = document.getElementById('al2')
const al3 = document.getElementById('al3')
const al4 = document.getElementById('al4')
const al5 = document.getElementById('al5')







const fetchweather = async (e) => {
    e.preventDefault()

    try {

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f7ec1137319d4c10a7e70021262703&q=${input.value}&days=5&aqi=yes&alerts=yes`)
        const data = await response.json();

        h1.innerText = data.current.temp_c + "°C"
        h2.innerText = data.location.name

        img.setAttribute("src", data.current.condition.icon)
        p.innerText = data.current.condition.text


        aqi1.innerHTML = data.forecast.forecastday[0].day.air_quality["us-epa-index"] || "N/A"
        aqi2.innerHTML = data.forecast.forecastday[1].day.air_quality["us-epa-index"] || "N/A"
        aqi3.innerHTML = data.forecast.forecastday[2].day.air_quality["us-epa-index"] || "N/A"
        aqi4.innerHTML = data.forecast.forecastday[3].day.air_quality["us-epa-index"] || "N/A"
        aqi5.innerHTML = data.forecast.forecastday[4].day.air_quality["us-epa-index"] || "N/A"

        av1.innerHTML = data.forecast.forecastday[0].day.avgtemp_c + "°C"
        av2.innerHTML = data.forecast.forecastday[1].day.avgtemp_c + "°C"
        av3.innerHTML = data.forecast.forecastday[2].day.avgtemp_c + "°C"
        av4.innerHTML = data.forecast.forecastday[3].day.avgtemp_c + "°C"
        av5.innerHTML = data.forecast.forecastday[4].day.avgtemp_c + "°C"

        al1.innerHTML = data.alerts.alert.length === 0 ? "No Alerts" : data.alerts.alert.length
        al2.innerHTML = data.alerts.alert.length === 0 ? "No Alerts" : data.alerts.alert.length
        al3.innerHTML = data.alerts.alert.length === 0 ? "No Alerts" : data.alerts.alert.length
        al4.innerHTML = data.alerts.alert.length === 0 ? "No Alerts" : data.alerts.alert.length
        al5.innerHTML = data.alerts.alert.length === 0 ? "No Alerts" : data.alerts.alert.length


        console.log(data);

    } catch (error) {

        window.alert("Please enter the valid city name")

    }


    form.reset()
}

form.addEventListener("submit", fetchweather)
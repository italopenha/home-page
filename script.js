function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let dia = agora.getDate();
  let mes = agora.getMonth() + 1;
  let ano = agora.getFullYear();
  const body = document.querySelector('body')
  const main = document.querySelector('main')
  const card = document.querySelector('.card')

  if (horas < 10)
    horas = "0" + horas;

  if (minutos < 10)
    minutos = "0" + minutos;

  if (dia < 10)
    dia = "0" + dia;

  if (mes < 10)
    mes = "0" + mes;

  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("dia").textContent = dia;
  document.getElementById("mes").textContent = mes;
  document.getElementById("ano").textContent = ano;

  switch (horas.toString()) {
    case "00":
      body.style.backgroundImage = 'url(../imgs/00.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.200)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.200)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "06":
      body.style.backgroundImage = 'url(../imgs/06.jpg)';
      body.style.flexFlow = 'column nowrap';
      body.style.justifyContent = 'space-evenly'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.300)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.300)';
      break;
    case "07":
      body.style.backgroundImage = 'url(../imgs/07.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "08":
      body.style.backgroundImage = 'url(../imgs/08.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "09":
      body.style.backgroundImage = 'url(../imgs/09.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.450)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.450)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "10":
      body.style.backgroundImage = 'url(../imgs/10.jpg)';
      body.style.flexFlow = 'column nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.350)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "11":
      body.style.backgroundImage = 'url(../imgs/11.jpg)';
      body.style.flexFlow = 'column nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "12":
      body.style.backgroundImage = 'url(../imgs/12.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'flex-start'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "13":
      body.style.backgroundImage = 'url(../imgs/13.jpg)';
      body.style.flexFlow = 'column nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "14":
      body.style.backgroundImage = 'url(../imgs/14.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'flex-start'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "15":
      body.style.backgroundImage = 'url(../imgs/15.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "16":
      body.style.backgroundImage = 'url(../imgs/16.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'flex-start'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "17":
      body.style.backgroundImage = 'url(../imgs/17.jpg)';
      body.style.flexFlow = 'column nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "18":
      body.style.backgroundImage = 'url(../imgs/18.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'flex-end'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "19":
      body.style.backgroundImage = 'url(../imgs/19.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "20":
      body.style.backgroundImage = 'url(../imgs/20.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-between'
      body.style.alignItems = 'flex-start'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.300)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.300)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "21":
      body.style.backgroundImage = 'url(../imgs/21.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.400)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.450)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "22":
      body.style.backgroundImage = 'url(../imgs/22.jpg)';
      body.style.justifyContent = 'center';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.250)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.250)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    case "23":
      body.style.backgroundImage = 'url(../imgs/23.jpg)';
      body.style.justifyContent = 'center';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.250)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.250)';
      main.style.margin = '30px'
      card.style.margin = '30px'
      break;
    default:
      body.style.backgroundImage = 'url(../imgs/00.jpg)';
      body.style.flexFlow = 'row nowrap';
      body.style.justifyContent = 'space-around'
      body.style.alignItems = 'center'
      main.style.backgroundColor = 'rgba(0, 0, 0, 0.200)';
      card.style.backgroundColor = 'rgba(0, 0, 0, 0.200)';
      main.style.margin = '30px'
      card.style.margin = '30px'
  }
}

const apiKey = "1d7afa6a29736071b6998495238305f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "imgs/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "imgs/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "imgs/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "imgs/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "imgs/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);
  checkWeather("São Paulo");

  const searchBox = document.querySelector(".search input")
  const searchBtn = document.querySelector(".search button")

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
  });

  searchBox.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
  });
});


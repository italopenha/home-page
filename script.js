function atualizarRelogio() {
  const agora = new Date();
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let dia = agora.getDate();
  let mes = agora.getMonth() + 1;
  let ano = agora.getFullYear();

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
      document.body.style.backgroundImage = 'url(../imgs/00.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    case "06":
      document.body.style.backgroundImage = 'url(../imgs/06.jpg)';
      break;
    case "07":
      document.body.style.backgroundImage = 'url(../imgs/07.jpg)';
      break;
    case "08":
      document.body.style.backgroundImage = 'url(../imgs/08.jpg)';
      break;
    case "09":
      document.body.style.backgroundImage = 'url(../imgs/09.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    case "10":
      document.body.style.backgroundImage = 'url(../imgs/10.jpg)';
      break;
    case "11":
      document.body.style.backgroundImage = 'url(../imgs/11.jpg)';
      break;
    case "12":
      document.body.style.backgroundImage = 'url(../imgs/12.jpg)';
      break;
    case "13":
      document.body.style.backgroundImage = 'url(../imgs/13.jpg)';
      break;
    case "14":
      document.body.style.backgroundImage = 'url(../imgs/14.jpg)';
      break;
    case "15":
      document.body.style.backgroundImage = 'url(../imgs/15.jpg)';
      break;
    case "16":
      document.body.style.backgroundImage = 'url(../imgs/16.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    case "17":
      document.body.style.backgroundImage = 'url(../imgs/17.jpg)';
      break;
    case "18":
      document.body.style.backgroundImage = 'url(../imgs/18.jpg)';
      break;
    case "19":
      document.body.style.backgroundImage = 'url(../imgs/19.jpg)';
      break;
    case "20":
      document.body.style.backgroundImage = 'url(../imgs/20.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    case "21":
      document.body.style.backgroundImage = 'url(../imgs/21.jpg)';
      break;
    case "22":
      document.body.style.backgroundImage = 'url(../imgs/22.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    case "23":
      document.body.style.backgroundImage = 'url(../imgs/23.jpg)';
      document.body.style.justifyContent = 'center';
      break;
    default:
      document.body.style.backgroundImage = 'url(../imgs/00.jpg)';
  }
}

setInterval(atualizarRelogio, 1000)

atualizarRelogio();
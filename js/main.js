setInterval(carregar, 1000)

function carregar() {
  var relogio = document.getElementById('relogio')
  var data = document.getElementById('data')
  var wallpaper = document.getElementById('wallpaper')
  var d = new Date()
  var dia = d.getDate()

  if (dia < 10)
    dia = String(d.getDate()).padStart(2, "0")

  const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  var mes = meses[d.getMonth()]
  var ano = d.getFullYear()
  var horas = String(d.getHours()).padStart(2, "0")
  var minutos = String(d.getMinutes()).padStart(2, "0")

  relogio.innerHTML = (`${horas}:${minutos}`)
  data.innerHTML = (`${dia}/${mes}/${ano}`)

  if (horas == '00') {
    wallpaper.style.backgroundImage = 'url(../imgs/00.jpg)'
    document.body.style.justifyContent = 'center'
  } else if (horas == '07') {
    wallpaper.style.backgroundImage = 'url(../imgs/07.jpg)'
  } else if (horas == '08') {
    wallpaper.style.backgroundImage = 'url(../imgs/08.jpg)'
  } else if (horas == '09') {
    wallpaper.style.backgroundImage = 'url(../imgs/09.jpg)'
  } else if (horas == '10') {
    wallpaper.style.backgroundImage = 'url(../imgs/10.jpg)'
  } else if (horas == '11') {
    wallpaper.style.backgroundImage = 'url(../imgs/11.jpg)'
  } else if (horas == '12') {
    wallpaper.style.backgroundImage = 'url(../imgs/12.jpg)'
  } else if (horas == '13') {
    wallpaper.style.backgroundImage = 'url(../imgs/13.jpg)'
  } else if (horas == '14') {
    wallpaper.style.backgroundImage = 'url(../imgs/14.jpg)'
  } else if (horas == '15') {
    wallpaper.style.backgroundImage = 'url(../imgs/15.jpg)'
  } else if (horas == '16') {
    wallpaper.style.backgroundImage = 'url(../imgs/16.jpg)'
  } else if (horas == '17') {
    wallpaper.style.backgroundImage = 'url(../imgs/17.jpg)'
  } else if (horas == '18') {
    wallpaper.style.backgroundImage = 'url(../imgs/18.jpg)'
  } else if (horas == '19') {
    wallpaper.style.backgroundImage = 'url(../imgs/19.jpg)'
  } else if (horas == '20') {
    wallpaper.style.backgroundImage = 'url(../imgs/20.jpg)'
    document.body.style.justifyContent = 'center'
  } else if (horas == '21') {
    wallpaper.style.backgroundImage = 'url(../imgs/21.jpg)'
    document.body.style.justifyContent = 'center'
  }
}

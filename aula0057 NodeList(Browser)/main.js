const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroudColorBody = estilosBody.backgroundColor

//console.log(backgroudColorBody)

for (let p of ps){
  p.style.backgroundColor = backgroudColorBody
  p.style.color = "#ffffff"
 
}
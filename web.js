let arrowBtn = document.getElementById('arrow')
let info = document.getElementById('more3')
let closeBtn = document.querySelectorAll('.close')
let info1 =document.getElementById('more1')
let info2 =document.getElementById('more2')
let info3 =document.getElementById('more4')
let abt =document.getElementById('about')
let openBtn =document.querySelectorAll('.upper')

arrowBtn.addEventListener('click', function () {
    info.style.display = 'flex'
    
    
})
closeBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        info.style.display = 'none'
        info1.style.display = 'none'
        info2.style.display = 'none'
        info3.style.display = 'none'
        abt.style.display = 'none'
    })
})
openBtn.forEach(function (btn1) {
    btn1.addEventListener('click' , function (e) {

      if (e.target.innerText ==="ABOUT") {
        info1.style.display = 'flex'
        abt.style.display = 'block'
      } 
      else if (e.target.innerText ==="CONTACT") {
        info3.style.display = 'flex'
      }
      else if (e.target.innerText.includes('SKILL')) {
        info2.style.display = 'flex'
      }
    })
})
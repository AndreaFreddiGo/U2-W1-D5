const navbar = document.getElementsByTagName('nav')[0]
const button = document.querySelectorAll('nav button')[0]

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 400) {
    navbar.classList.add('whiteNav')
    button.classList.add('greenButton')
  } else {
    navbar.classList.remove('whiteNav')
    button.classList.remove('greenButton')
  }
  console.log(e)
})

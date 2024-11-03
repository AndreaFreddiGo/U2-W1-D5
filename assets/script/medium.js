// vado a "targhettare" la navbar ed il bottone al suo interno
const navbar = document.getElementsByTagName('nav')[0]
const button = document.querySelectorAll('nav button')[0]

// aggiungo un listener che a seguito di scroll, quando raggiungo una certa
// profondità di scorrimento verticale, aggiunge le rispettive classi a bottone
// e navbar che ne cambiano il background color con un fade-in
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

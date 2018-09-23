yearBar = document.getElementById("yearBar")
sticky = yearBar.offsetTop

overScroll = ->
  if window.pageYOffset >= sticky
    yearBar.classList.add("sticky")
  else
    yearBar.classList.remove("sticky")

window.onscroll = -> overScroll()
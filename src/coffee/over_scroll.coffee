yearBar = document.getElementById("yearBar")
sticky = yearBar.offsetTop

overScroll = ->
  if window.pageYOffset >= sticky
    yearBar.classList.add("sticky")
    yearBar.classList.add("hover_shadow")
  else
    yearBar.classList.remove("sticky")
    yearBar.classList.remove("hover_shadow")

window.onscroll = -> overScroll()
top = document.getElementById("gotoTop")
year2018 = document.getElementById("goto2018")
year2017 = document.getElementById("goto2017")

smoothScroll = (year) ->
  document.getElementById(year).scrollIntoView({behavior: "smooth"})

top.onclick = -> smoothScroll("top")
year2018.onclick = -> smoothScroll("2018")
year2017.onclick = -> smoothScroll("2017")
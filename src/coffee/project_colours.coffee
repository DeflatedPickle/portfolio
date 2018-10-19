# Language
file = require("../../assets/colours.json")

langList = document.querySelectorAll(".lang")

langList.forEach((value, key, parent) ->
  value.style.backgroundColor = file[value.classList[1]]
)

# Libraries
ColorHash = require("color-hash")

libList = document.querySelectorAll(".lib")

libList.forEach((value, key, parent) ->
  value.style.backgroundColor = new ColorHash().hex(value.classList[1])
)
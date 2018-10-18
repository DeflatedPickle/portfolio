ColorHash = require("color-hash")

colorHashInstance = new ColorHash()

libList = document.querySelectorAll(".lib")

libList.forEach((value, key, parent) ->
  value.style.backgroundColor = colorHashInstance.hex(value.classList[1])
)
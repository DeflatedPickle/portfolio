projectList = document.querySelectorAll(".project")

projectList.forEach( (value, key, parent) ->
  expanderPlacement = undefined
  switch value.parentElement.classList[0]
    when "left" then expanderPlacement = "left"
    when "right" then expanderPlacement = "right"
    else expanderPlacement = "bottom"

  for child in value.children
    if "hidden" in child.classList
      hidden = child

    if "expander" in child.classList
      expander = child
      # hidden = child.childNodes[1]

  switch expanderPlacement
    when "left" then expander.textContent = "<"
    when "right" then expander.textContent = ">"
    when "bottom" then expander.textContent = "\\/"

  expandFunc = ->
    if "hidden" in hidden.classList
    # if hidden.style.maxHeight
      hidden.classList.remove("hidden")

      # hidden.style.maxHeight = null
      # value.style.maxHeight -= hidden.scrollHeight + "px"
      # value.style.height = value.scrollHeight / 1.5 + "px"

      switch expanderPlacement
        when "left"
          expander.textContent = ">"
          value.style.marginLeft = "7%"
          value.style.gridTemplateColumns = "145px auto 32px 30%"
        when "right"
          expander.textContent = "<"
          value.style.marginRight = "7%"
          value.style.gridTemplateColumns = "30% 32px 145px auto"
        when "bottom" then expander.textContent = "/\\"

    else
      hidden.classList.add("hidden")

      # hidden.style.maxHeight = hidden.scrollHeight + "px"
      # value.style.height = hidden.scrollHeight * 3.5 + "px"

      switch expanderPlacement
        when "left"
          expander.textContent = "<"
          value.style.marginLeft = "30%"
          value.style.gridTemplateColumns = "145px auto 32px 0"
        when "right"
          expander.textContent = ">"
          value.style.marginRight = "30%"
          value.style.gridTemplateColumns = "0 32px 145px auto"
        when "bottom" then expander.textContent = "\\/"

  expander.onclick = -> expandFunc())
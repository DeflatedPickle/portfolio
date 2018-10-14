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

  expanderText = expander.childNodes[0]

  switch expanderPlacement
    when "left"
      expanderText.textContent = "⯇"
      expanderText.classList.add("left")

      value.style.height = "180px"

    when "right"
      expanderText.textContent = "⯈"
      expanderText.classList.add("right")

      value.style.height = "180px"

    when "bottom"
      expanderText.textContent = "⯆"
      expanderText.classList.add("bottom")

  expandFunc = ->
    if "hidden" in hidden.classList
    # if hidden.style.maxHeight
      hidden.classList.remove("hidden")

      # hidden.style.maxHeight = null
      # value.style.maxHeight -= hidden.scrollHeight + "px"
      # value.style.height = value.scrollHeight / 1.5 + "px"

      switch expanderPlacement
        when "left"
          expanderText.textContent = "⯈"
          expanderText.classList.remove("left")
          expanderText.classList.add("right")

          value.style.marginLeft = "7%"
          value.style.gridTemplateColumns = "145px auto 32px 60%"

          hidden.style.maxWidth = "100%"

        when "right"
          expanderText.textContent = "⯇"
          expanderText.classList.remove("right")
          expanderText.classList.add("left")

          value.style.marginRight = "7%"
          value.style.gridTemplateColumns = "60% 32px 145px auto"

          hidden.style.maxWidth = "100%"

        when "bottom"
          expanderText.textContent = "⯅"
          expanderText.classList.remove("bottom")
          expanderText.classList.add("top")

          hidden.style.maxHeight = hidden.scrollHeight + "px"

    else
      hidden.classList.add("hidden")

      # hidden.style.maxHeight = hidden.scrollHeight + "px"
      # value.style.height = hidden.scrollHeight * 3.5 + "px"

      switch expanderPlacement
        when "left"
          expanderText.textContent = "⯇"
          expanderText.classList.remove("right")
          expanderText.classList.add("left")

          value.style.marginLeft = "30%"
          value.style.gridTemplateColumns = "145px auto 32px 0"

          hidden.style.maxWidth = null

        when "right"
          expanderText.textContent = "⯈"
          expanderText.classList.remove("left")
          expanderText.classList.add("right")

          value.style.marginRight = "30%"
          value.style.gridTemplateColumns = "0 32px 145px auto"

          hidden.style.maxWidth = null

        when "bottom"
          expanderText.textContent = "⯆"
          expanderText.classList.remove("top")
          expanderText.classList.add("bottom")

          hidden.style.maxHeight = null

  expander.onclick = -> expandFunc())
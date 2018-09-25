projectList = document.querySelectorAll(".project")

projectList.forEach( (value, key, parent) ->
  for child in value.children
    if "hidden" in child.classList
      hidden = child

    if "expanderParent" in child.classList
      expander = child.childNodes[0]

  expandFunc = ->
    if "hidden" in hidden.classList
      hidden.classList.remove("hidden")
      expander.childNodes[0].textContent = "/\\"
    else
      hidden.classList.add("hidden")
      expander.childNodes[0].textContent = "\\/"

  expander.onclick = -> expandFunc())
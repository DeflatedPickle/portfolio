import requests
import yaml
import json


def setup_colours():
    # Request the languages
    req = requests.get("https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml")

    # Load the language YAML
    content = yaml.load(req.text)

    # Extract the colours and place them in a new dictionary
    colours = {}
    for key in content.keys():
        col = content.get(key).get("color")
        if col:
            colours[key] = col

    # Resolve some extra languages
    colours["Pug"] = colours["HTML"]
    colours["Stylus"] = colours["CSS"]

    # Write the extracted colours to a file
    # with open("assets/colours.yml", "w") as file:
    #     yaml.dump(colours, file, default_flow_style=False)
    with open("assets/colours.json", "w") as file:
        json.dump(colours, file)


if __name__ == "__main__":
    setup_colours()

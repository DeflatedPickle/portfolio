require("../stylus/dark/index.styl");

require("isotope-layout");
require("chosen-js");

$(".text").each((i, e) => {
    e.innerText = ">"
});

const isotope = new Isotope('#projectGroup', {
    itemSelector: '.project',
    layoutMode: 'fitRows'
});

const year = {
    2016: "six",
    2017: "seven",
    2018: "eight",
    2019: "nine"
};

const lang = {
    "Kotlin": "kt",
    "TypeScript": "ts",
    "D": "d",
    "Rust": "rs",
    "Python": "py",
    "C++": "cpp",
    "Perl 6": "pl6",
    "C": "c",
};

$("select").chosen({
    width: "200px",
    // @ts-ignore
    no_result_text: "No results..."
}).change(() =>
    isotope.arrange({
        "sortBy": "name",
        // @ts-ignore
        "filter": $("#years").val().map(it => "." + year[it]).join(' ')
            // @ts-ignore
            + $("#langs").val().map(it => '.' + lang[it.toString()]).join(' ')
    })
);

$(".expander").click((e) => {
    const button = <HTMLElement>e.currentTarget;
    const previous = <HTMLElement>button.previousElementSibling;
    previous.classList.toggle("visible");

    switch (!previous.classList.contains("visible")) {
        case true: {
            (<HTMLElement>button.firstElementChild).innerText = ">";
            previous.classList.remove("visible");
            break;
        }
        case false: {
            (<HTMLElement>button.firstElementChild).innerText = "<";
            previous.classList.add("visible");
            break;
        }
    }
});

// @ts-ignore
$(".plate").bind("transitionend", () => isotope.layout());
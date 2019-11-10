require("../stylus/dark/index.styl");

require("isotope-layout");
require("chosen-js");

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
    // @ts-ignore
    isotope.arrange({"filter": $("#years").val().map(it => "." + year[it]).join(' ') + $("#langs").val().map(it => '.' + lang[it.toString()]).join(' ')})
);
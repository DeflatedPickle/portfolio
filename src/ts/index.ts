require("../stylus/dark/index.styl");

require("isotope-layout");
require("chosen-js");

const isotope = new Isotope('#projectGroup', {
  itemSelector: '.project',
  layoutMode: 'fitRows'
});

const year = {
  2017: "seven",
  2018: "eight",
  2019: "nine"
};

$("select").chosen({
  width: "200px",
  // @ts-ignore
  no_result_text: "No results..."
}).change(() =>
  // @ts-ignore
  isotope.arrange({ "filter": $("#years").val().map(it => "." + year[it]).join(' ') + $("#langs").val().map(it => '.' + it).join(' ') })
);
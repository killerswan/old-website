// Kevin Cantu © 2010
// This script is overkill, but will be easy to expand or simplify later...

// TITLE BAR
(function () {
  try {

    // TITLE BAR
    var bod = document.getElementsByTagName("body")[0];
    var h = document.createElement("div");
    h.id = "cantuTitle";
    bod.insertBefore(h, bod.firstChild);
    var cls = "ct";

    // LOGOTYPE
    var name = document.createElement("h1");
    name.className = cls;
    name.innerHTML = "KevinCant<a class=\"" + cls +
        "\" href=\"http:\/\/kevincantu.org\/\" " +
        "title=\"Home: learn about me!\">u.<\/a>org";
    h.appendChild(name);

    // LINKS
    var links = [
        { text: "About",
          title:"Home: learn about me!",
          href: "http:\/\/kevincantu.org\/" },
        { text: "Code",
          title:"See computer sciencey stuff!",
          href: "http:\/\/kevincantu.org\/code\/" },
        { text: "Log",
          title:"Read some thoughts!",
          href: "http:\/\/log.kevincantu.org\/" },
        { text: "Photos",
          title:"Look at my pictures!",
          href: "http:\/\/flickr.com\/photos\/kevin751\/" }
    ];

    var navigation = document.createElement("ul");
    navigation.className = cls;
    h.appendChild(navigation);

    for (var i = 0; i < links.length; i += 1) {
        var item = document.createElement("li");
        item.className = cls;
        navigation.appendChild(item);

        var a = document.createElement("a");
        a.className = cls;
        a.title = links[i].title;
        a.href = links[i].href;
        a.innerHTML = links[i].text;
        item.appendChild(a);
    }
  } catch (e) {}
})();

// ANALYTICS
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-13261525-5']);
_gaq.push(['_setDomainName', '.kevincantu.org']);
_gaq.push(['_trackPageview']);

(function() {
  try {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ?
                'https://ssl' : 'http://www') +
                '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  } catch (e) {}
})();

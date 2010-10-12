// Kevin Cantu © 2010
// This is overkill, but will be easy to expand or simplify later
(function () {
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

    links.forEach(function (link,i,a) {
        var item = document.createElement("li");
        item.className = cls;
        navigation.appendChild(item);

        var a = document.createElement("a");
        a.className = cls;
        a.title = link.title;
        a.href = link.href;
        a.innerHTML = link.text;
        item.appendChild(a);
    });
})();

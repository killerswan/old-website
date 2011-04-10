// Kevin Cantu © 2010
// this is probably overkill...
//
// For the moment, this depends on jQuery ($) and Underscore (_): might as well
// start putting them on every page...

$(document).ready(function () {
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
          { text: "Code",
            title:"See computer sciencey stuff!",
            href: "http:\/\/kevincantu.org\/code\/" },
          { text: "Log",
            title:"Read some thoughts!",
            href: "http:\/\/log.kevincantu.org\/" },
          { text: "Photos",
            title:"Look at my pictures!",
            href: "http:\/\/flickr.com\/photos\/kevin751\/" },
          { text: "Twitter",
            title:"Follow me!",
            href: "http:\/\/twitter.com\/#!\/killerswan\/" }
      ];

      var navigation = document.createElement("ul");
      navigation.className = cls;
      h.appendChild(navigation);

      _.each(links, function (link) {
         var item = document.createElement("li");
         item.className = cls;
         navigation.appendChild(item);

         var a = document.createElement("a");
         a.className =   cls;
         a.title =       link.title;
         a.href =        link.href;
         a.innerHTML =   link.text;
         item.appendChild(a);
      });
   } catch (e) {}

   try {
      // ICON
      var head = document.getElementsByTagName("head")[0];
      var icon = document.createElement("link");
      icon.href="http://kevincantu.org/lib/icon/udot.png";
      icon.type="image/png";
      icon.rel="icon";
      head.appendChild(icon);
   } catch (e1) {}
});

// ANALYTICS
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-13261525-5']);
_gaq.push(['_setDomainName', '.kevincantu.org']);
_gaq.push(['_trackPageview']);

$(document).ready(function() {
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
});

// Kevin Cantu (c) 2010
//  kevincantu.org

var CANTU = (function () {
    return {
        writeHeader: function () {
            var headerContent;

            headerContent  = "<div id=cantuHeader>";

            headerContent += "<h1>KevinCant<a href=\"http:\/\/kevincantu.org\/\" title=\"Home: learn about me!\">u.<\/a>org<\/h1>";

            headerContent += "<ul>";
            headerContent += "<li><a title=\"Home: learn about me!\"                href=\"http:\/\/kevincantu.org\/\"               >About<\/a><\/li>";
            headerContent += "<li><a title=\"See computer sciencey stuff!\"         href=\"http:\/\/kevincantu.org\/code\/\"         >Code<\/a><\/li>";
            headerContent += "<li><a title=\"Read some thoughts!\"                  href=\"http:\/\/log.kevincantu.org\/\"           >Log<\/a><\/li>";
            headerContent += "<li class=\"last\"><a title=\"Look at my pictures!\"  href=\"http:\/\/flickr.com\/photos\/kevin751\/\" >Photos<\/a><\/li>";
            headerContent += "<\/ul>";

            //headerContent += "<span class=\"icons\">";
            //headerContent += "<a href=\"http://www.twitter.com/killerswan\"><img src=\"http://twitter-badges.s3.amazonaws.com/t_small-b.png\" alt=\"Follow me on Twitter!\"\><\/a>";
            //headerContent += "<\/span>";
            
            headerContent += "<\/div>";

            document.write(headerContent);
        }
    };
}());


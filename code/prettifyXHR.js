// Kevin Cantu © 2010

var prettifyXHR = (function () {
    
    // insert content more safely
    if (!String.prototype.entityify) {
        String.prototype.entityify = function () {
            return this.replace(/&/g, "&amp;").replace(/</g,
                "&lt;").replace(/>/g, "&gt;");
        };
    }

    // get the head element
    var h = document.getElementsByTagName("head")[0];

    // load my prettify stylesheet
    var s = document.createElement("link");
    s.type = "text/css";
    s.rel = "stylesheet";
    s.href = "http://kevincantu.org/lib/prettify.css";
    h.appendChild(s);

    // load the main prettify script
    var j = document.createElement("script");
    j.src = "http://kevincantu.org/lib/3p/prettify/src/prettify.js";
    h.appendChild(j);

    // specific languages available
    var srclib = "http://kevincantu.org/lib/3p/prettify/src/";
    var availableLanguages = [
        // BESIDES THE DEFAULT LIST at kevincantu.org/lib/3p/prettify/
        "lang-apollo",
        "lang-css",
        "lang-hs",
        "lang-lisp",
        "lang-lua",
        "lang-ml",
        "lang-proto",
        "lang-scala",
        "lang-sql",
        "lang-vb",
        "lang-vhdl",
        "lang-wiki",
        "lang-yaml"
    ];

    // initially, no specific languages loaded
    var loadedLanguages = [];

    return function (node, uri, language) {
    
        // add script for specific language
        if ( language &&                                            // exists
            (-1 === loadedLanguages.lastIndexOf(language)) &&       // not yet loaded
            (-1 !== availableLanguages.lastIndexOf(language))       // available
                                                               ) {
            var j1 = document.createElement("script");
            j1.src = srclib + language + ".js";
            h.appendChild(j1);

            loadedLanguages.push(language);
        }


        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                /* possible states:
                    0: uninit,  1: loading,  2: loaded, 
                    3: interactive,  4: complete
                */

                // if HTTP response is OK from server                
                if (request.status === 200) {

                    // insert source code
                    var code = document.createElement("pre");
                    code.innerHTML = request.responseText.entityify();
                    code.className = "prettyprint" + (language ? (" " + language) : "");
                    node.appendChild(code);

                    // insert a caption
                    var caption = document.createElement("p");
                    caption.innerHTML = "<em>Contents of \"" + uri + "\":<\/em>";
                    node.insertBefore(caption, code);

                    // syntax highlight the source code
                    try {
                        prettyPrint();  // invoke prettify
                    } catch (e) {}
                }
            } 
        };
        request.open("GET", uri, true);
        request.send(null);
    };
})();

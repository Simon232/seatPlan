// not working good
// Clone-nál mindent megörököl, egy JS furniture objectből, csak pl x pozijához adódik 30px
function cloneFurni(){
//var furnitures = document.getElementsByClassName("furnitures");
    var cloneid = 0; 
//    console.log(furnitures);
//  console.log(furnitures.id);

    $( ".furnitures" ).dblclick(function() {    
        var styleStr = $(this).attr("style");
        var partsOfStr = styleStr.split(";");

        var leftStr = partsOfStr[1];
        var subleftStr = leftStr.slice(-6, -2);
        var subleftStrPx = parseInt(subleftStr) + 50 + "px";

        var innerHTMLstr = $(this).text();
        var classes = $(this).attr("class");
        var splittedClasses = classes.split(" ");
        var levelName = splittedClasses[splittedClasses.length - 1];

        clone = document.createElement("div"); // true means clone all childNodes and all event handlers
            clone.id = "clone" + cloneid++;  // ez így jo??
            clone.className = "draggable drag-drop furnitures";
            clone.innerHTML = innerHTMLstr + "_";
            clone.style.top = partsOfStr[0];
            clone.style.left = subleftStrPx; 
            if (levelName != "can-drop"){
                document.getElementById(levelName).after(clone);
                console.log(levelName);
            } else {
                var levelName = splittedClasses[splittedClasses.length - 2];
                document.getElementById(levelName).after(clone);
                console.log(levelName);
            }
    });    
}
setTimeout(cloneFurni, 5000);
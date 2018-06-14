// not working good
// Clone-nál mindent megörököl, egy JS furniture objectből, csak pl x pozijához adódik 30px
function cloneFurni(){
//var furnitures = document.getElementsByClassName("furnitures");
    var furnitures = document.getElementById("furniture0");
    var id = 0;
//    console.log(furnitures[1]);
    $( ".furnitures" ).dblclick(function() {
        clone = furnitures.cloneNode(true); // true means clone all childNodes and all event handlers
        var idja = document.getElementById;
        console.log(idja);
        
        clone.id = "furnitureClone" + id++;  // ez így jo??
        clone.className = "draggable drag-drop furnitures";
        clone.innerHTML = "cloned" + furnitures.innerHTML;

        document.getElementById("level2").after(clone);
    });
}
setTimeout(cloneFurni, 5000);

/*
var furnitureDiv = function(){
    this.id = "furniture0";
}

furnitureDiv.prototype = {
    init: function(){
        var closure = this.foo.bind(this);  // closure = bezárás
     // or
        // var closure = this.Bind(this.foo);
        addEvent(document.getElementById(this.id), "dblclick", closure);
    },
    foo: function(e){
        var o = document.getElementById(this.id);
        if (o) {
            clone = o.cloneNode(true); // true means clone all childNodes and all event handlers
            var idja = document.getElementById;
            console.log(idja);
            
            clone.id = "furnitureClone" + id++;  // ez így jo??
            clone.className = "draggable drag-drop furnitures";
            clone.innerHTML = "cloned" + o.innerHTML;
            document.getElementById("level2").after(clone);
        }
    }
}
document.getElementById("furniture0").onclick = foo.bind(furniture0);*/
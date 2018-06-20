// Get "seat-pos-x" and "seat-pos-y", from the Json file
function furnituresLoader(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var data = jsonQ(jsonObj);

    var furnitures = data.find("furnitures");
    var posX = furnitures.find("seat-pos-x");
    var posY = furnitures.find("seat-pos-y");
    var type = furnitures.find("type");
    var level = furnitures.find("seat-office-part");
//    console.log(level.value()[i]);

    for(var i = 0; i < posX.length; i++){
 //???       newDiv.setAttribute("class","draggable drag-drop");
// console.log(level.value()[i]);
        var newDiv = document.createElement("div");
        newDiv.id = "furniture" + i;
        newDiv.className = "draggable drag-drop furnitures " + level.value()[i];
        newDiv.style.top = posY.value()[i] + "px";  // important to add + "px", I have forget that 
        newDiv.style.left = posX.value()[i] + "px"; 
        newDiv.style.position = "relative";
        newDiv.innerHTML = type.value()[i];
        
        document.getElementById(level.value()[i]).appendChild(newDiv); 
    }
}

setTimeout(furnituresLoader, 5000);
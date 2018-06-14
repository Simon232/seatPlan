// Get "seat-pos-x" and "seat-pos-y", from the Json file
function furnitures(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var data = jsonQ(jsonObj);
//    console.log(jsonObj);
    var furnitures = data.find("furnitures");
    var posX = furnitures.find("seat-pos-x");
    var posY = furnitures.find("seat-pos-y");
    var type = furnitures.find("type");
    var levels = furnitures.find("seat-office-part");

    for(var i = 0; i < posX.length; i++){
 //???       newDiv.setAttribute("class","draggable drag-drop");
 console.log(levels.value()[i]);
        var newDiv = document.createElement("div");
        newDiv.id = "furniture" + i;
        newDiv.className = "draggable drag-drop furnitures";
        newDiv.style.top = posY.value()[i] + "px";  // important to add + "px", I have forget that 
        newDiv.style.left = posX.value()[i] + "px"; 
        newDiv.style.position = "relative";
        newDiv.innerHTML = type.value()[i];
        
        document.getElementById("level2").appendChild(newDiv); 
    }
//    document.getElementById("level2").appendChild(newDiv); //csak elsőt teszi ki
//    console.log(newDiv);  //OK
 //   console.log(posX.value()[0]);   //OK
 //   console.log(posX.value()[1]);  //OK
}

setTimeout(furnitures, 5000);
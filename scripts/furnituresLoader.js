// Get "seat-pos-x" and "seat-pos-y", from the Json file
function furnitures(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var data = jsonQ(jsonObj);
//    console.log(jsonObj);
    var furnitures = data.find("furnitures");
 //   console.log(furnitures);
    var posX = furnitures.find("seat-pos-x");
    var posY = furnitures.find("seat-pos-y");
    var type = furnitures.find("type");
    var levels = furnitures.find("seat-office-part");
//    console.log(levels.value()[2]); //OK
//this is ugly    console.log(levels);
//    console.log(furnitures.length);  //OK
//    console.log(posX.value()[10]);  //OK
//    console.log(posX.length);  //OK

    for(var i = 0; i < posX.length; i++){
 //???       newDiv.setAttribute("class","draggable drag-drop");
        var newDiv = document.createElement("div");
        newDiv.className = "draggable drag-drop";
        newDiv.style.top = posY.value()[i] + "px";  // important to add + "px", I have forget that 
        newDiv.style.left = posX.value()[i] + "px"; 
        newDiv.style.position = "relative";
        newDiv.innerHTML = type.value()[i];
//        console.log(posX.value()[i]);   //OK
//        console.log(posY.value()[i]);   //OK
//        console.log(type.value()[i]);   //OK
//        console.log(newDiv);  //OK
 //       var element = document.querySelector(".flex-container");
        document.getElementById("level2").appendChild(newDiv); 
//        newDiv.setAttribute();
 //       console.log(newDiv.getAttribute("className"));
 //       console.log(newDiv.getAttribute("innerHTML"));        
    }
//    document.getElementById("level2").appendChild(newDiv); //csak elsőt teszi ki
//    console.log(newDiv);  //OK
 //   console.log(posX.value()[0]);   //OK
 //   console.log(posX.value()[1]);  //OK
}

setTimeout(furnitures, 5000);
// Get "seat-pos-x" and "seat-pos-y", from the Json file
function furnitures(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var data = jsonQ(jsonObj);
    console.log(jsonObj);
    var furnitures = data.find("furnitures");
    console.log(furnitures);

    var posX = furnitures.find("seat-pos-x");
    var posY = furnitures.find("seat-pos-y");
    var type = furnitures.find("type");
    var levels = furnitures.find("seat-office-part");
    console.log(levels.value()[2]);
//this is ugly    console.log(levels);
    console.log(furnitures.length);
    console.log(posX.value()[10]);

    for(var i = 0; i < posX.length; i++){
        var newDiv = document.createElement("div");
        newDiv.className = "draggable drag-drop";
        newDiv.style.top = posY.value()[i];
        newDiv.style.left = posX.value()[i]; 
        newDiv.innerHTML = type.value()[i];
//        console.log(posX.value()[i]);   //OK
//        console.log(posY.value()[i]);   //OK
//        console.log(type.value()[i]);   //OK
 //       var element = document.querySelector(".flex-container");
        document.getElementById("level2").appendChild(newDiv);
    }
    
    console.log(posX.value()[0]);   //OK
    console.log(posX.value()[1]);  //OK
    console.log(posX.value()[2]);
}

setTimeout(furnitures, 4000);
// Loading names of employees (title etc.) from the Json file
function nameLoading(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var employees = jsonQ(jsonObj);

    var names = employees.find("name");
    var posX = employees.find("seat-pos-x");
    var posY = employees.find("seat-pos-y");
    var profilePics = employees.find("profile-pic");
    var level = employees.find("seat-office-part");
    console.log(level.value()[i]);
//later can be shown    var titles = employees.find("title");
//    console.log(profilePics.value()[i]);

    for (var i = 0; i < names.length; i++){
        var newDiv = document.createElement("div");
        newDiv.id = "employee" + i;
        newDiv.className = "draggable drag-drop withPic " + level.value()[i];
        newDiv.innerHTML = names.value()[i];
        newDiv.style.top = posY.value()[i] + "px";  // important to add + "px" 
        newDiv.style.left = posX.value()[i] + "px"; 
        newDiv.style.position = "relative";
        //console.log(profilePics.value()[i]);
        newDiv.style = "background-image: url(https://minyon.aimotive.com" + profilePics.value()[i] + ")";

        var element = document.querySelector("#nameList"); //parent
        //OR
 //       var element = document.getElementById( "level0" );
        element.appendChild(newDiv);
    }
}

setTimeout(nameLoading, 5000);
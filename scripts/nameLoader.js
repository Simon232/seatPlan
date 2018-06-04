function nameLoading(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var employees = jsonQ(jsonObj);
    console.log(jsonObj);

    var names = employees.find("name");
    var namesToAdd = document.createDocumentFragment();
    for(var i = 0; i < names.length; i++){
       var newDiv = document.createElement("div");
       newDiv.className = "draggable drag-drop";
       newDiv.innerHTML = names.value()[i];
       namesToAdd.appendChild(newDiv);
    //   document.appendChild(namesToAdd);
    }
    var element = document.querySelector(".flex-container");
    element.appendChild(namesToAdd);

    console.log(names.value()[10]);
    //to print the 3rd name
    console.log(names.value()[2]);
    //to print list of all name
    console.log(names.value());
}

setTimeout(nameLoading, 4000);
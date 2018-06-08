// Loading names of employees (title etc.) from the Json file
function nameLoading(){
    var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
    var employees = jsonQ(jsonObj);
//    console.log(jsonObj);  //OK

    var names = employees.find("name");
//later can be shown    var titles = employees.find("title");

    for(var i = 0; i < names.length; i++){
       var newDiv = document.createElement("div");
       newDiv.className = "draggable drag-drop";
       newDiv.innerHTML = names.value()[i];
//later can be shown       newDiv.innerHTML = names.value()[i] + "<br>" + "<i>" + titles.value()[i];
    var element = document.querySelector("#nameList"); //parent
    element.appendChild(newDiv);
    }
    
//    console.log(names.value()[10]);  //OK
    //to print the 3rd name
 //   console.log(names.value()[2]);  //OK
    //to print list of all name
 //   console.log(names.value());  //OK
}

setTimeout(nameLoading, 5000);
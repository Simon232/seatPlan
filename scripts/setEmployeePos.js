var newJsonObj = {
  employees: []
};

function setEmployeePos (draggableElementName, draggableElementPosiX, draggableElementPosiY){
  var jsonObj = JSON.parse(document.getElementById('regeStr').innerHTML);
/*
  var employees = jsonQ(jsonObj);
  var departments = employees.find("department");
  var emails = employees.find("emails");
  var logins = employees.find("login");
  var names = employees.find("name");
  var profPics = employees.find("profile-pic");
  var titles = employees.find("titles");
*/

//  console.log(jsonObj.employees[2]);
//  console.log(jsonObj.employees.length);
  for (var i = 0; i < jsonObj.employees.length; i++){
//    console.log(jsonObj.employees[i].name);
//    console.log(draggableElementName);
//    console.log(jsonObj.employees[i].name == draggableElementName);

  if (jsonObj.employees[i].name == draggableElementName){
 //     var index = names.index( draggableElementName );
  //    console.log(index);

      var x = jsonObj.employees[i]["seat-pos-x"] = draggableElementPosiX + "px";
      var y = jsonObj.employees[i]["seat-pos-y"] = draggableElementPosiY + "px";
      console.log(jsonObj);
    }
  }  


  newJsonObj.employees.push({posX : x, posY : y});
  console.log(newJsonObj);


/*  
  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  // Start file download.
  setInterval(download("newData.json",JSON.stringify(jsonObj)), 20000);
*/

}
setTimeout(setEmployeePos, 5000);
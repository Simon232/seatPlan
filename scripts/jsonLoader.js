// detect a change in a file input with an id of “the-file-input”

$("#btnOpenJson").change(function() {
    //console.log(this.files);

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function(theFile) {
        //console.log(reader.result);

        // Display Json
        document.getElementById('regeStr').innerHTML += reader.result;

        //return function (e) {};
    };
    //return reader.onload();
    reader.readAsText(this.files[0]);

});

/*
// verzion 2: pure JS
var request = new XMLHttpRequest();
request.open("GET", "../data/data.json", false);
request.send(null)
var jsonObj = JSON.parse(request.responseText);
console.log(jsonObj.result[0]);
*/
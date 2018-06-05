/* there is a bug because titles are shown incorrectly*/

function searchForNames() {
    var input, filter, nameList, div, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    nameList = document.getElementById("nameList");
    divArr = nameList.getElementsByTagName("div");
    console.log(divArr);
    for (i = 0; i < divArr.length; i++) {
 //       a = div[i].getElementsByTagName("a")[0];
        if (divArr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            divArr[i].style.display = "";
        } else {
            divArr[i].style.display = "none";

        }
    }
}


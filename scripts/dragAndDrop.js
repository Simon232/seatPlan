function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*
function stopPropagation(id, event) {
    $(id).on(event, function(e) {
        e.stopPropagation();
        return false;
    });
}
stopPropagation('#end2', 'mouseup');*/
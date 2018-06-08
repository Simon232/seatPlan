$(document).ready(function() {
    var params = {
        start: function(event, ui) {
            console.log("Rotating started")
        },
        rotate: function(event, ui) {
            if (Math.abs(ui.angle.current > 6)) {
                console.log("Rotating " + ui.angle.current)
            }
        },
        stop: function(event, ui) {
            console.log("Rotating stopped")
        },
    };      
    $('#target3').resizable().rotatable( {snap: true} );   // resizable lehet nem kell
    $('#draggable3').draggable();
    $('#desk').resizable().rotatable( {snap: true} );   // resizable lehet nem kell
    $('#draggable4').draggable();
});

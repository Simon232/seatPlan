// not working good
function Clone() {
    var original = $('#draggable4')
    var clone = $(original).clone(true, true);
    
    $('#end1').prepend(clone);
}
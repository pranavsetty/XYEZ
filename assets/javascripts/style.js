$('#fullpage').fullpage({
    //anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    'navigation': true,
    'navigationPosition': 'right',


});

$('#videoLayer').on('click',function(){
    $(this).hide();
});
var pixelToMove = 6;
$(".section").mousemove(function(e) {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newValueX = (e.pageX / width) * pixelToMove;
    var newValueY = (e.pageY / height) * pixelToMove;
    $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');
});
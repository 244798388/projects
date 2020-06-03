var i = 0;
$("button").click((e) => {
    var target = e.target;
    if ($(target).html() == "NEXT") {
        dh(1);
    } else {
        dh(-1);
    }
})
function dh(a) {
    if (typeof (a) == "number") {
        i += a;
        if (i == 6) {
            i = 0
        } else if (i == -1) {
            i = 4
        }
    } else {
        i = $(a).index();
    }

    $(".middle").stop().animate({
        "margin-left": i * -400 + "px"
    }, 1000);
    
}

var i=0
$(".banner span").click(e=>{
    var target=e.target
    if($(target).attr("dy")==0){
        i--
        if(i==-1){
            i=2
        }
    }else{
        i++
        if(i==3){
            i=0
        }
    }
    for(var j=0;j<$(".xx").length;j++){
        $($(".xx")[j]).css("opacity",0)      
    }
    $($(".xx")[i]).css("opacity",1)
})
setInterval(function(){
    i++
    if(i==3){
        i=0
    }
    for(var j=0;j<$(".xx").length;j++){
        $($(".xx")[j]).css("opacity",0)      
    }
    $($(".xx")[i]).css("opacity",1)
},3000)

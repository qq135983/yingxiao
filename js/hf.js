/**
 * Created by bjwsl-001 on 2017/2/9.
 */
$(".service").hover(function(){
    var $div=$(this).children(".vice");
    $div.toggle();
    if($div.css("display")=="block"){
        $div.prev().addClass("hover");
    }else{
        $div.prev().removeClass("hover");
    }
});
$(".case").hover(function(){
    var $case=$(this).children(".typical_case");
    $case.toggle();
    if($case.css("display")=="block")
        $case.prev().addClass("hover");
    else
        $case.prev().removeClass("hover");
});
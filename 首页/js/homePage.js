$('.content2').mousemove(function(){
    $('.source').show();
}).mouseout(function(){
    $('.source').hide();
});

var index =0;
var timer = setInterval(function(){
    index = (index == 1) ? 0 : index + 1;
    $(".top").hide().eq(index).show();
}, 15000);

$(".top-options").find("li").click(function(){
    $(".content").hide().eq($(this).index(0)).show();
});
/*客服弹出框*/
$('.customerServiceBox').mousemove(function(){
    $('.customerServicePop').show();
}).mouseout(function(){
    $('.customerServicePop').hide();
});
/*投放案例*/
$(".al-header").find("li").click(function(){
    $(".al-header").find("li").css({'background':'#fff'});
    $(this).css({'background':'#ddd'});
    $(".al-body").hide().eq($(this).index(0)).show();
});

/*帮助中心*/
$(".gg-ul").find("li").click(function(){
    $(".gg-ul").find("li").css({'background':'#fff','color':'#333'});
    $(this).css({'background':'#00b3ee','color':'#fff'});
    $(".gg-body").hide().eq($(this).index(0)).show();
    $(".mt-body").hide();
    $(".mt-ul").find("li").css({'background':'#fff','color':'#333'});
});
$(".mt-ul").find("li").click(function(){
    $(".mt-ul").find("li").css({'background':'#fff','color':'#333'});
    $(this).css({'background':'#00b3ee','color':'#fff'});
    $(".mt-body").hide().eq($(this).index(0)).show();
    $(".gg-body").hide();
    $(".gg-ul").find("li").css({'background':'#fff','color':'#333'});
});
$(function(){
    if($('.qwer').height>25){
        $('.asdf').hide();
    }
});












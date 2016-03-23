/**
 * Created by a on 2016/2/16.
 */
$('.xf-msg').click(function(){
    $('.xf-msg').addClass('active');
    $('.mt-material').removeClass('active');
    $('.cj-msg').show();
    $('.content1').show();
    $('.content2').hide();
    $('.content3').hide();
    $('.add-img').hide();
    $('.add-moreImg').hide();
});
$('.mt-material').click(function(){
    $('.xf-msg').removeClass('active');
    $('.mt-material').addClass('active');
    $('.cj-msg').hide();
    $('.content1').hide();
    $('.content2').show();
    $('.content3').hide();
    $('.add-img').show();
    $('.add-moreImg').show();
});
$('.cj-msg').click(function(){
    $('.xf-msg').addClass('active');
    $('.mt-material').removeClass('active');
    $('.cj-msg').hide();
    $('.content1').hide();
    $('.content2').hide();
    $('.content3').show();
    $('.add-img').hide();
    $('.add-moreImg').hide();
});
/*搜索按钮*/
$('#search-btn').click(function(){
   $('#recently-label').find("option[value='全部']").attr("selected",true);
});
/*下发消息瀑布流*/
$(function(){
    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 260,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.container.find('.brick img').load(function() {
        wall.fitWidth();
    });
    function waterfall(){
        wall.fitWidth();
    }

    $(function(){
        waterfall()
    });
    $('.xf-msg').click(function(){
        $(function(){
            waterfall()
        });
    });
});

/*媒体素材瀑布流*/
$(function(){
    var wall = new Freewall("#freewall2");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.container.find('.brick img').load(function() {
        wall.fitWidth();
    });
    function waterfall(){
        wall.fitWidth();
    }

    $(function(){
        waterfall()
    });
    $('.mt-material').click(function(){
        $(function(){
            waterfall()
        });
    });
});
/*媒体素材图片半透明遮罩层*/
$('.del-img').on('click',function(){
    $(this).parent().hide();
    $(this).parent().parent().find('.freewall-img-del-model').show();
});
$('.del-btns .fa-ban').click(function(){
    $(this).parent().parent().parent().find('.freewall-img-operation-model').show();
    $(this).parent().parent().hide();
});
/*时间排序*/
$('#sort1').click(function(){
    $(this).hide();
    $('#sort2').show();
});
$('#sort2').click(function(){
    $(this).hide();
    $('#sort1').show();
});

$('#sort3').click(function(){
    $(this).hide();
    $('#sort4').show();
});
$('#sort4').click(function(){
    $(this).hide();
    $('#sort3').show();
});

/*编辑和移除*/
$('.tag-operate-btn').click(function(){
    if($(this).find('.tag-operate').css("display")=="none"){
        $(this).find('.tag-operate').show()
    }else {
        $(this).find('.tag-operate').hide()
    }
});
/*创建下发消息-封面图片model*/
$('.wc-img-parent').mousemove(function(){
    $('.gallery-option').show();
}).mouseout(function(){
    $('.gallery-option').hide();
});

/*标签添加*/
$(function() {
    $('#tags_1').tagsInput({width:'auto'});
});
$(function() {
    $('#tags_2').tagsInput({width:'auto'});
});
/*图片添加*/
$(document).ready(function(){
//图片显示插件
    $.imageFileVisible({
        wrapSelector: "#image-wrap",
        fileSelector: "#file"
    });
});










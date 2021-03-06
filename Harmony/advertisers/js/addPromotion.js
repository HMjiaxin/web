/**
 * Created by a on 2016/4/4.
 */
/**
 * Created by a on 2016/2/24.
 */
var businessId=10013;
var postId=null;
var mediaType=null;
$(function(){
    var balance=null;
    $.ajax({
        type: 'post',
        url: 'http://192.168.0.115:8080/allotad/getscore',
        dataType: 'jsonp',
        data: {
            businessId : businessId
        },
        success : function(data){
            balance=data.toString();
            $('#balance').text(balance);
            budget(balance)
        }
    });
});
/*下发消息库鼠标悬停显示标题*/
function showTitle(){
    $('.material-wrapper>ul').find('li').mousemove(function(){
        $(this).find('.rich-mask').show();
        $(this).find('.rich-title').show();
    }).mouseout(function(){
        $(this).find('.rich-mask').hide();
        $(this).find('.rich-title').hide();
    }).click(function(){
        postId=$(this).attr('postId');
        $('.send-down-sample').hide('slow');
        $('.send-down-preview-b').show('slow');
        $('.send-down-preview-s').show('slow');
        var src=$(this).find('img')[0].src;
        $('.send-down-preview-b img').attr("src",src);
        $('.send-down-preview-s img').attr("src",src);
        var title=$(this).find('.rich-title')[0].innerHTML;
        $('.send-down-preview-b .send-down-msg-title').html(title);
        $('.send-down-preview-s p').html(title);
        $('.preview-title').html(title);
        var author=$(this).attr('author');
        $('.preview-author').html(author);
        var digest=$(this).attr('digest');
        $('.preview-body').html(digest);
        var sourceurl=$(this).attr('sourceurl');
        $('.preview-link').html(sourceurl);
    });
}
/*下发消息删除*/
function delMsg(){
    $('.wechat-details-h li a').find('.fa-trash-o').click(function(){
        $('.send-down-sample').show('slow');
        $('.send-down-preview-b').hide('slow');
        $('.send-down-preview-s').hide('slow');
        $('.preview-title').html('下发示例');
        $('.preview-author').html('Parllay');
        $('.preview-body').html('下发示例,请点击图文进行选择下发示例');
        $('.preview-link').html('http://www.parllay.cn/');
        postId=null;
    });
}
function library(q,w,e){
    $('#news-library').empty();
    $.ajax({
        type: 'post',
        url: 'http://192.168.0.115:8080/allotad/postlibrary',
        /*url: 'http://192.168.0.115:8080/postlibrary',*/
        dataType: 'jsonp',
        data: {
            businessId : q,
            number : w,
            tag: e
        },
        success : function(data){
            for(var i= 0; i<data.length; i++){
                $('#news-library').append('<li postId="'+data[i].postId+'" author="'+data[i].author+'" digest="'+data[i].digest+'" sourceUrl="'+data[i].sourceUrl+'">'
                    +'<img src='+data[i].imageUrl+'>'
                    +'<div class="rich-mask"></div>'
                    +'<div class="rich-title">'+data[i].title+'</div>'
                    +'</li>'
                );
            }
            showTitle();
            delMsg()
        },
        error: function(){
            console.log('异步请求发生错误！');
            console.log(arguments);
        }
    });
}
/*新增推广内容*/
$(function(){
    library(businessId,7,"");
    chooseType();
});
/*按标签搜索*/
$('#search-tab').click(function(){
    var tag=null;
    tag=$(this).parent().find('p').html();
    if(tag=='按标签搜索'){
        tag=''
    }
    console.log(tag);
    library(businessId,7,tag)
});
/*7、30、全部--切换*/
$('.body-content-title>.btn-group').find('button').click(function(){
    $(".body-content-title>.btn-group").find("button").removeClass('active');
    $(this).addClass('active');
    var num=$(this).val();
    var tag=$('#search-tab').parent().find('p').html();
    if(tag=='按标签搜索'){
        tag=''
    }
    library(businessId,num,tag)
});
/*按标签搜索*/
$(function(){
    $(".search-wrapper p").click(function(){
        var ul=$(".search-pop");
        if(ul.css("display")=="none"){
            ul.slideDown();
        }else{
            ul.slideUp();
        }
    });
    $(".search-wrapper li").click(function(){
        var li=$(this).text();
        $(".search-wrapper p").html(li);
        $(".search-pop").hide();
    });
});
/*/!*下发示例左右框高度相同*!/
 var h=$('.wechat-details-s').height();
 $('.wechat-details-body-right').height(h);*/
function chooseType(){
    $.ajax({
        type: 'post',
        url: 'http://192.168.0.115:8080/allotad/wechattype',
        dataType: 'jsonp',
        success : function(data){
            for(var i= 0; i<data.length; i++){
                $('.chosen-select').append(
                    '<option value="'+data[i].id+'" name="'+data[i].className +'">'+data[i].className+'&nbsp;&nbsp;</option>'
                )

            }
            $(".chosen-select").trigger("liszt:updated");
        },
        error: function(){
            console.log('异步请求发生错误！');
            console.log(arguments);
        }
    });
}
/*选择插件*/
$(function(){
    $('.chosen-select').chosen();
});
/*流量主类别选择*/
$('.chosen-select').change(function(){
    var val=$(this).val();
    mediaType=val.toString();
    var text=$('.result-selected').text();
    if(text==''){
        $('#fetch-detail').text('无');
    }else{
        $('#fetch-detail').text(text);
    }
    showmMedia(val);
});
var i=0;
var delArr=[];
function showmMedia(r){
    i=0;
    delArr=[];
    if(r==null){
        r = '';
        $('.media-representatives-content').empty();
        $('.surpass').text('');
    }else{
        r = r.toString();
        $.ajax({
            type: 'post',
            url: 'http://192.168.0.115:8080/allotad/getmedia',
            /*url: 'http://192.168.0.115:8080/getmedia',*/
            dataType: 'jsonp',
            data:{
                types : r
            },
            success : function(data){
                $('.media-representatives-content').empty();
                for(var i= 0; i<data.length; i++){
                    $('.media-representatives-content').append(
                        '<ul class="pull-left media-representatives-body">'
                        +'<li class="pull-left media-representatives-img">'
                        +'<img src="'+data[i].accountImageUrl+'"/>'
                        +'<div class="qrcode">'
                        +'<img src="../media/乐生活.jpg"/>'
                            /*'+data[i].QRCode+'*/
                        +'</div>'
                        +'</li>'
                        +'<li class="pull-left media-representatives-text">'
                        +'<p>'+data[i].name+'</p>'
                        +'<p class="fs">粉丝数:'+data[i].fanQuantity+'</p>'
                        +'</li>'
                        +'<li class="pull-right media-representatives-close">'
                        +'<i class="fa fa-close media-close"></i>'
                        +'<input type="checkbox" value="'+data[i].mediaId+'" class="media-choose"/>'
                        +'</li>'
                        +'<li class="pull-right media-representatives-qrcode">'
                        +'<i class="fa fa-qrcode media-qrcode"></i>'
                        +'</li>'
                        +'</ul>'
                    )

                }
                $('.surpass').text('');
                $('.media-representatives-footer').hide();
                $('.media-choose').hide();
                $('.media-close').show();
                qrcode();
            },
            error: function(){
                console.log('异步请求发生错误！');
                console.log(arguments);
            }
        });
    }
}



/*出价模式*/
$(function(){
    $(".model-wrapper p").click(function(){
        var ul=$(".model-pop");
        if(ul.css("display")=="none"){
            ul.slideDown();
        }else{
            ul.slideUp();
        }
    });
    $(".model-wrapper li").click(function(){
        var li=$(this).text();
        $(".model-wrapper p").html(li);
        $(".model-pop").hide();
    });
});
/*代表媒体*/
$('#media-del-more').click(function(){
    $('.media-representatives-footer').show();
    $('.media-choose').show();
    $('.media-close').hide();
});
$('#media-cancel').click(function(){
    $('.media-representatives-footer').hide();
    $('.media-close').show();
    $('.media-choose').hide().removeAttr('checked');
});
function qrcode(){
    var q=$('.media-choose').length;
    var w=$('.media-choose:checked').length;
    $('.media-qrcode').mousemove(function(){
        $(this).parent().parent().find($('.qrcode')).show();
    }).mouseout(function(){
        $(this).parent().parent().find($('.qrcode')).hide();
    });
    $('.media-choose').change(function(){
        w=$('.media-choose:checked').length;
        if(w+i>q*0.2){
            $(this).removeAttr('checked');
            $('.surpass').text('删除媒体不得超过20%；');
        }else{
            $('.surpass').text('');
        }
    });
    $('#media-del').click(function(){
        $('.media-representatives-footer').hide();
        $('.media-close').show();
        $('.media-choose').hide();
        $('.media-choose:checked').parent().parent().hide('slow');
        for(var i= 0;i<w;i++){
            if($('.media-choose:checked:eq('+i+')').val()!=undefined){
                delArr.push($('.media-choose:checked:eq('+i+')').val());
            }
        }
        console.log(delArr);
        delArr=delArr.deleteEle();
        console.log(delArr);
    });
    $('.media-close').click(function(){
        i+=w;
        i++;
        if(i<q*0.2){
            $(this).parent().parent().hide('slow');
            delArr.push($(this).parent().find('input').val());
            $('.surpass').text('');
        }else{
            $(this).parent().parent().show();
            $('.surpass').text('删除媒体不得超过20%；');
        }
        console.log(delArr);
    });
}
Array.prototype.deleteEle=function(){
    var newArr = this;
    for (var i=newArr.length-1; i>=0; i--)
    {
        var targetNode = newArr[i];
        for (var j=0; j<i; j++)
        {
            if(targetNode == newArr[j]){
                newArr.splice(i,1);
                //alert(arr);
                break;
            }
        }
    }
    return newArr;
};
$(function(){
    $('#selected-time-start').text($('#startDate').val());
    $('#selected-time-end').text($('#endDate').val());
    $('#startDate').change(function(){
        var val=$('#startDate').val();
        console.log(val);
    })
});
function budget(b){
    $('#budget').keyup(function(){
        var val=$(this).val();
        var reg=/^[0-9]*[1-9][0-9]*$/;
        if(val==''){
            $('#budget-preview').text('0');
        }else if(reg.exec(val)&&val-b<0){
            $('#budget-preview').text($(this).val());
            $('.budget-prompt').text('');
        }else if(reg.exec(val)&&val-b>0){
            $('.budget-prompt').text('预算不得大于余额');
        }else{
            $('.budget-prompt').text('请输入正确的数字');
        }
    });
}


$('#confirm').click(function(){
    if(delArr.length==0){
        delArr=0
    }
    console.log(delArr.toString());
    layer.open({
        type: 0,
        title :['确定发送广告？','color:red;font-size:16px;'],
        content:'<p>所选广告：'+$('.preview-title').text()+'</p>'
        +'<p>所选流量主类别：'+$('#fetch-detail').text()+'</p>'
        +'<p>所选时间段：'+$('#selected-time-start').text()+' 至 '+$('#selected-time-end').text()+'</p>'
        +'<p>所选预算：'+$('#budget-preview').text()+'</p>',
        shift: 5,
        btn: '发送',
        yes: function(index, layero){
            var priceType=null;
            if($('.price-type').text()=='默认下发'){
                priceType=0
            }else if($('.price-type').text()=='单图文下发'){
                priceType=1
            }else if($('.price-type').text()=='首图文下发'){
                priceType=2
            }
            layer.close(index); //如果设定了yes回调，需进行手工关闭
            if($('.preview-title').text()=='下发示例'){
                layer.msg('请至少选择1条微信',{time: 2000});
            }else if($('#fetch-detail').text()=='无'){
                layer.msg('请选流量主类别',{time: 2000});
            }else if($('#budget-preview').text()==0){
                layer.msg('预算填写不完整',{time: 2000});
            }else{
                $.ajax({
                    type: 'post',
                    url: 'http://192.168.0.115:8080/allotad/addnewad',
                    dataType: 'jsonp',
                    data:{
                        businessId : businessId,
                        postId : postId,
                        mediaType : mediaType,
                        startDate : $('#selected-time-start').text(),
                        endDate : $('#selected-time-end').text(),
                        priceType : priceType,
                        budget : $('#budget-preview').text(),
                        exceptMedia : delArr.toString()
                    },
                    success : function(data){
                        window.location.href="contentMarketing.html";
                    },
                    error: function(){
                        console.log('异步请求发生错误！');
                        console.log(arguments);
                    }
                });
            }
        }
    });
})
































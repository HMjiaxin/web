/**
 * Created by a on 2016/2/24.
 */
var businessId=10013;
/*折线图*/
var lineChart1,pieTimer;
$(function () {
    lineChart1=new Highcharts.chart({
        chart: {
            renderTo : "line-chart1",
            type: 'line',
            ignoreHiddenSeries: false,
            backgroundColor: ''
        },
        colors: ['#D0121B','#F39700','#595757','#5DB7E8','#00969E','#DD6B74','#9EBD19','#036EB8'],
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['2015/10/26','2015/10/27',
                '2015/10/28','2015/10/29',
                '2015/10/30','2015/10/31',
                '2015/11/01'],
            gridLineColor: '#ccc',
            gridLineWidth: 1,
            labels:{
                step: 1
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function() {
                    return this.value
                }
            },
            gridLineColor: '#ccc',
            gridLineWidth: 1
        },
        tooltip: {
            crosshairs: [ {
                width: 1,
                color: "#006cee"
            }],
            shared: true,
            style:{
                text_align: 'center'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
            name: '触达用户数',
            marker: {
                symbol: 'circle'
            },
            data: [0,1,2,0,0,1,2]

        }, {
            name: '图文阅读人数',
            marker: {
                symbol: 'circle'
            },
            data: [4,2,4,3,1,2,0]
        },{
            name: '图文阅读次数',
            marker: {
                symbol: 'circle'
            },
            data: [2,6,2,9,5,2,5]
        }
        ]
    });
});
/*饼状图*/
$(function () {
    $('#pie-chart').highcharts({
        chart: {
            renderTo : "pie-chart",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: ''
        },
        colors: ['#D0121B','#F39700','#595757','#5DB7E8','#00969E','#DD6B74','#9EBD19','#036EB8'],
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data: [
                ['实际送达人数总数量',   30],
                ['潜在送达人数总数量',   130]
            ]
        }]
    });
});
/*表格*/
$(function () {
    $("#example1").DataTable({
        "oLanguage": {
            "sSearch": "搜索",
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sZeroRecords": "没有检索到数据",
            "sInfo": "显示 _START_ 至 _END_ 条 &nbsp;&nbsp;共 _TOTAL_ 条",
            "sInfoFiltered": "(筛选自 _MAX_ 条数据)",
            "sInfoEmtpy": "没有数据",
            "sProcessing": "正在加载数据...",
            "oPaginate":
            {
                "sFirst": "首页",
                "sPrevious": "前一页",
                "sNext": "后一页",
                "sLast": "末页"
            }
        },
        "order": [[ 2, "desc" ]],
        "columnDefs": [{
            orderable: false,
            targets: [0,1,3,4]
        }],
        "bDestroy":true,
        "autoWidth": false,
        "deferRender": true,
        "searching": false,
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,//每页显示10条数据
        "lengthChange": false
        /*"processing": true,
        "serverSide": true,*/
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
    });
}
function library(q,w,e){
    $('#news-library').empty();
    $.ajax({
        type: 'post',
        url: 'http://192.168.0.115:8080/postlibrary',
        dataType: 'jsonp',
        data: {
            businessId : q,
            number : w,
            tag: e
        },
        success : function(data){
            for(var i= 0; i<data.length; i++){
                $('#news-library').append('<li author="'+data[i].author+'" digest="'+data[i].digest+'" sourceUrl="'+data[i].sourceUrl+'">'
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
$('.add-pro').click(function(){
    $('.content-pro').hide();
    $('.content-add-pro').show();
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
/*最近7天、最近30天、全部--切换*/
$('.pro-title>.btn-group').find('button').click(function(){
    $(".pro-title>.btn-group").find("button").removeClass('active');
    $(this).addClass('active');
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
        url: 'http://192.168.0.115:8080/wechattype',
        dataType: 'jsonp',
        success : function(data){
            console.log(data);
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
    var val=$(this).val().toString();
    console.log(val);
    var text=$('.result-selected').text();
    if(text==''){
        $('#fetch-detail').text('无');
    }else{
        $('#fetch-detail').text(text);
    }
    showmMedia(val);
});
function showmMedia(r){
    $.ajax({
        type: 'post',
        url: 'http://192.168.0.115:8080/getmedia',
        dataType: 'jsonp',
        data:{
            types : r
        },
        success : function(data){
            console.log(data);
            for(var i= 0; i<data.length; i++){
                $('.media-representatives-content').append(
                    '<ul class="pull-left media-representatives-body">'
                    +'<li class="pull-left media-representatives-img">'
                    +'<img src="'+data[i].accountImageUrl+'"/>'
                    +'<div class="qrcode">'
                    +'<img src="'+data[i].QRCode+'"/>'
                    +'</div>'
                    +'</li>'
                    +'<li class="pull-left media-representatives-text">'
                    +'<p>'+data[i].name+'</p>'
                    +'<p class="fs">粉丝数:'+data[i].fanQuantity+'</p>'
                    +'</li>'
                    +'<li class="pull-right media-representatives-close">'
                    +'<i class="fa fa-close media-close"></i>'
                    +'<input type="checkbox" class="media-choose"/>'
                    +'</li>'
                    +'<li class="pull-right media-representatives-qrcode">'
                    +'<i class="fa fa-qrcode media-qrcode"></i>'
                    +'</li>'
                    +'</ul>'
                )

            }
        },
        error: function(){
            console.log('异步请求发生错误！');
            console.log(arguments);
        }
    });
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
    if($('.media-representatives-footer').css("display")=="none"){
        $('.media-representatives-footer').show();
    }else {
        $('.media-representatives-footer').hide();
    }
    if($('.media-choose').css("display")=="none"){
        $('.media-choose').show();
    }else {
        $('.media-choose').hide();
    }
    if($('.media-close').css("display")=="block"){
        $('.media-close').hide();
    }else {
        $('.media-close').show();
    }
});
$('#media-cancel').click(function(){
    $('.media-representatives-footer').hide();
    $('.media-close').show();
    $('.media-choose').hide();
});
$('#media-del').click(function(){
    $('.media-representatives-footer').hide();
    $('.media-close').show();
    $('.media-choose').hide();
});
$('.media-qrcode').mousemove(function(){
    $(this).parent().parent().find($('.qrcode')).show();
}).mouseout(function(){
    $(this).parent().parent().find($('.qrcode')).hide();
});







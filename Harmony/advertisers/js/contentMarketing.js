/**
 * Created by a on 2016/2/24.
 */
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
/*新增推广内容*/
$('.add-pro').click(function(){
    $('.content-pro').hide();
    $('.content-add-pro').show();
});
/*7、30、全部--切换*/
$('.body-content-title>.btn-group').find('button').click(function(){
    $(".body-content-title>.btn-group").find("button").removeClass('active');
    $(this).addClass('active');
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
/*下发示例左右框高度相同*/
var h=$('.wechat-details-s').height();
$('.wechat-details-body-right').height(h);
/*选择插件*/
var config = {
    '.chosen-select'           : {},
    '.chosen-select-deselect'  : {allow_single_deselect:true},
    '.chosen-select-no-single' : {disable_search_threshold:10},
    '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
    '.chosen-select-width'     : {width:"95%"}
};
for (var selector in config) {
    $(selector).chosen(config[selector]);
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









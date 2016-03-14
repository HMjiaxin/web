/**
 * Created by a on 2015/12/28.
 */
$('#wen').click(function(){
    if($('.wen-pop').css("display")=="none"){
        $('.wen-pop').show();
    }else{
        $('.wen-pop').hide();
    }
});
/*下载单选框选择*/
$('input[type=radio]:first-child').click(function () {
    $('.PDF').show();
    $('.CSV').hide();
});
$('input[type=radio]:nth-child(3)').click(function () {
    $('.CSV').show();
    $('.PDF').hide();
});
/*更多选项弹出框*/
$('#more-option').click(function(){
    if($('#more-option-pop').css("display")=="none"){
        $('#more-option-pop').show();
    }else{
        $('#more-option-pop').hide();
    }
});
$('#more-option-sure').click(function(){
    $('#more-option-pop').hide();
});
/*固定导航栏在顶部*/
$('#fixde-nav1').click(function(){
    $('#main-nav').addClass('navbar-fixed-top').click();
});
/*指标弹出框*/
$('#ndicators1').click(function(){
    if($('#ndicators1-pop').css("display")=="none"){
        $('#ndicators1-pop').show();
    }else{
        $('#ndicators1-pop').hide();
    }
});
$('#ndicators1-pop-close').click(function(){
    $('#ndicators1-pop').hide();
});
/*指标选择----最多选两个*/
var opts = new Array();
$('#bbb input[type=checkbox]').prop('checked',false).eq(0).prop('checked',true);
$('#zb-show').empty();
opts=[];
check_count($('#bbb input[type=checkbox]').eq(0)[0]);
function check_count(_obj) {
    if ($(":checkbox[name='zb']:checked").length >= 1) {
        var index=$(":checkbox[name='zb']").index($(_obj));
        opts.push(index);
        var val=$(_obj).val();
        var html="";
        html+="<span index="+index+">&nbsp;"+val+"&nbsp;<span>";
        if(_obj.checked){
            $(html).appendTo("#zb-show");
        }else{
            var aa=[];
            opts.forEach(function(i){
                if(i!=index){
                    aa.push(i)
                }
            });
            opts=aa;
            $("#zb-show").children("span[index="+index+"]").remove();
        }
    }

    if(opts.length >2){
        $($(":checkbox[name='zb']").get(opts.shift())).attr("checked", false);
        $("#zb-show").children("span:eq(0)").remove();
    }

}
/*更多选项弹出框默认选项*/
var defaultOpt=['liulanliang','fangkeshu','tiaochulv','pingjunshichang','pingjunyeshu'];
var tempOpt=['liulanliang','fangkeshu','tiaochulv','pingjunshichang','pingjunyeshu'];
$('#def-options').click(backToDefault).click();
function backToDefault(){
    tempOpt=['liulanliang','fangkeshu','tiaochulv','pingjunshichang','pingjunyeshu'];
    $('#more-option-pop-content li input[type=checkbox]').attr('checked',false);
    $('#more-option-pop-content li input[type=checkbox]').filter(function(){
        return (defaultOpt.indexOf($(this).val())>=0)
    }).prop('checked',true)
}
/*更多选项最多点击6个*/
function check_count_6(_obj) {
    var val=$(_obj).val();
    if(_obj.checked){
        tempOpt.push(val);
    }else{
        var aa=[];
        tempOpt.forEach(function(i){
            if(i!=val){
                aa.push(i)
            }
        });
        tempOpt=aa;
    }

    if(tempOpt.length >6){
        tempOpt.shift()
    }

    $('#more-option-pop-content li input[type=checkbox]').attr('checked',false);
    console.log(tempOpt);
    $('#more-option-pop-content li input[type=checkbox]').filter(function(){
        return (tempOpt.indexOf($(this).val())>=0)
    }).prop('checked',true)
}

$('#more-option-pop-content input[type=checkbox]').each(function(){
    $(this).click(function(){
        check_count_6(this)
    })
});
/*更多选项点击确定下方显示数据*/
var defaultJson={
    'liulanliang':{
        title:'浏览量（PV）',
        content:'即通常说的Page&nbsp;View(PV)，用户每打开一个网站页面就被记录1次。用户多次打开同一页面，浏览量值累计。'
    },
    'fangkeshu':{
        title:'访客数（UV）',
        content:'一天之内您网站的独立访客数(以Cookie为依据)，一天内同一访客多次访问您网站只计算1个访客。'
    },
    'pingjunshichang':{
        title:'平均访问时长',
        content:'访客在一次访问中，平均打开网站的时长。即每次访问中，打开第一个页面到关闭最后一个页面的平均值，打开一个页面时计算打开关闭的时间差。'
    },
    'pingjunyeshu':{
        title:'平均访问页数',
        content:'平均每次访问浏览的页面数量，平均访问页数=浏览量/访问次数。'
    },
    'zhuanhuacishu':{
        title:'转化次数',
        content:'访客到达转化目标页面的次数。'
    },
    'zhuanhualv':{
        title:'转化率',
        content:'转化率=转化次数/访问次数。'
    },
    'xinfangkeshu':{
        title:'新访客数',
        content:'一天的独立访客中，历史第一次访问您网站的访客数。'
    },
    'xinfangkebilv':{
        title:'新访客比率',
        content:'新访客比率=新访客数/访客数。'
    },
    'tiaochulv':{
        title:'跳出率',
        content:'只浏览了一个页面便离开了网站的访问次数占总的访问次数的百分比。'
    }
};

/*数据表格*/
function dataTable(){
    $("#example1").DataTable();
}

/*折线图*/
var lineChart1=null,pieChart1=null,pieTimer;

function buildLineChart(categories,data){
    function days(){
        if(categories.length>=7){
            return 4
        }else{
            return 1
        }
    }
	data.forEach(function(item,index){
		data[index].marker={symbol: 'circle'}
	});
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
            categories: categories,
            gridLineColor: '#ccc',
            gridLineWidth: 1,
            labels:{
                step: days()
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
        series:data
    })
}
/*饼状图*/
function buildPieChart(data){
	pieChart1=$('#pie-chart').highcharts({
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
                showInLegend: true,
				point:{
					events: { 
						mouseOver: function(e) { 
							console.log(e.target);
							clearTimeout(pieTimer);
							var index=e.target.index;
							lineChart1.series.forEach(function(item){
								item.hide()
							});
							lineChart1.series[index].show();
						}
					}	
				},
				events:{
					mouseOut:function(e){
						pieTimer=setTimeout(function(){
							lineChart1.series.forEach(function(item){
								item.show()
							})
						},100)
					}	
				}
            }
        },
        series: [{
            type: 'pie',
            name: '',
            data:data
        }]
    })
}






















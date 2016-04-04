/**
 * Created by a on 2016/2/24.
 */
var businessId=10013;
/*最近7天、最近30天、全部--切换*/
$('.pro-title>.btn-group').find('button').click(function(){
    $(".pro-title>.btn-group").find("button").removeClass('active');
    $(this).addClass('active');
});
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









































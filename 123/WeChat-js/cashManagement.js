/**
 * Created by a on 2016/3/10.
 */
/*function dataTable() {
    $("#example").dataTable({
        "searching": false,
        "ordering": false,
        "lengthChange":false,
        "oLanguage": {//下面是一些汉语翻译
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
        }
    });
}
$(function(){
    $.ajax({
        type: 'POST',
        url: 'WeChat-js/cashManagement.json',
        dataType: 'json',
        success: function(data){
            for(var i=0; i<data.length; i++){
                $('#tbody').append('<tr>'
                +'<td>'+data[i][0]+'</td>'
                +'<td>'+data[i][1]+'</td>'
                +'<td>'+data[i][2]+'</td>'
                +'<td>'+data[i][3]+'</td>'
                +'<td>'+data[i][4]+'</td>'
                +'<td>'
                +'<select onchange=myChange(this) '+(data[i][5]=='结束'?'disabled':'')+'>'
                +'<option value="申请提现" '+(data[i][5]=='申请提现'?'selected':'')+'>申请提现</option>'
                +'<option value="处理中" '+(data[i][5]=='处理中'?'selected':'')+'>处理中</option>'
                +'<option value="拒绝" '+(data[i][5]=='拒绝'?'selected':'')+'>拒绝</option>'
                +'<option value="结束" '+(data[i][5]=='结束'?'selected':'')+'>结束</option>'
                +'</select>'
                +'</td>'
                +'<td>'+data[i][6]+'</td>'
                +'<td>'+data[i][7]+'</td>'
                +'</tr>');
            }

            dataTable()
        },
        error: function(){
            console.log('异步请求发生错误！');
            console.log(arguments);
        }

    });
});
function myChange(e){
    console.log(e.value)
}
function resetTable(){
    $('#example').dataTable().fnDestroy();
    $('#tbody').empty()
}
$('#search-btn').click(function(){
    var val=$('#search-input').val();
    $.ajax({
        type: 'POST',
        url: 'WeChat-js/cashManagement2.json',
        dataType: 'json',
        /!*val: 'val',*!/
        success: function(data){
            resetTable();
            for(var i=0; i<data.length; i++){
                $('#tbody').append('<tr>'
                +'<td>'+data[i][0]+'</td>'
                +'<td>'+data[i][1]+'</td>'
                +'<td>'+data[i][2]+'</td>'
                +'<td>'+data[i][3]+'</td>'
                +'<td>'+data[i][4]+'</td>'
                +'<td>'
                +'<select onchange=myChange(this) '+(data[i][5]=='结束'?'disabled':'')+'>'
                +'<option value="申请提现" '+(data[i][5]=='申请提现'?'selected':'')+'>申请提现</option>'
                +'<option value="处理中" '+(data[i][5]=='处理中'?'selected':'')+'>处理中</option>'
                +'<option value="拒绝" '+(data[i][5]=='拒绝'?'selected':'')+'>拒绝</option>'
                +'<option value="结束" '+(data[i][5]=='结束'?'selected':'')+'>结束</option>'
                +'</select>'
                +'</td>'
                +'<td>'+data[i][6]+'</td>'
                +'<td>'+data[i][7]+'</td>'
                +'</tr>');
            }
            dataTable()
        },
        error: function(){
            console.log('异步请求发生错误！');
            console.log(arguments);
        }
    });


});*/
$(function(){
    $('#example').dataTable({
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
        "autoWidth": false,
        "deferRender": true,
        "ordering": false,
        "searching": false,
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,//每页显示10条数据
        "bAutoWidth": false,//宽度是否自动，感觉不好使的时候关掉试试
        "lengthChange": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/drawcashlist",//?draw=1"+Math.random(),
            "type": "get", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp"
        },
        "columns": [
            { "data": "id" },
            { "data": "businessName" },
            { "data": "weChat" },
            { "data": "businessId" },
            { "data": "score" },
            { "data": "drawCashScore" },
            { "data": 'status',
                "render":function(data,opt,aa){
                    var self=this;
                    select='<select onchange=myChange('+data+','+aa.id+',this)>'
                    +'<option value="0" '+(data=='0'?'selected':'')+'>申请提现</option>'
                    +'<option value="1" '+(data=='1'?'selected':'')+'>处理中</option>'
                    +'<option value="2" '+(data=='2'?'selected':'')+'>拒绝</option>'
                    +'<option value="3" '+(data=='3'?'selected':'')+'>结束</option>'
                    +'</select>';
                    return select
                }
            },
            { "data": "createDate" },
            { "data": "lastUpdatedDate" }
        ],
        "columnDefs": [
            {
                "targets": 0, //隐藏第六列，从第0列开始
                "visible": false
            }
        ]
    });
});
function myChange(a,e,obj){
    var changeStatus=obj.value;
    $.ajax({
        type: 'GET',
        url: 'http://192.168.0.115:8080/updateStatus',
        dataType: 'jsonp',
        data: {
            id : e,
            status : changeStatus
        },
        success: function(data){
            alert(data)
        }
    });
}









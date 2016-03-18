/**
 * Created by a on 2016/3/10.
 */
/*$('.manage-btn').find('button').click(function(){
    $('.manage-btn').find('button').removeClass('active');
    $(this).addClass('active');
    $(".content-body").hide().eq($(this).index(0)).show();
});*/
function dataTable() {
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
        /*val: 'val',*/
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


});














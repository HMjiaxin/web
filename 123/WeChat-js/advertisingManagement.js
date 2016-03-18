/**
 * Created by a on 2016/3/10.
 */
/*$('.manage-btn').find('button').click(function(){
    $('.manage-btn').find('button').removeClass('active');
    $(this).addClass('active');
    $(".content-body").hide().eq($(this).index(0)).show();
});*/
/*function dataTable() {
    $("#example").dataTable({
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
        url: 'WeChat-js/advertisingManagement.json',
        dataType: 'json',
        success: function(data){
            for(var i=0; i<data.length; i++){
                $('#tbody').append('<tr>'
                +'<td>'+data[i][0]+'</td>'
                +'<td>'+data[i][1]+'</td>'
                +'<td style="color:red;">'+data[i][2]+'</td>'
                +'<td>'+data[i][3]+'</td>'
                +'<td>'+data[i][4]+'</td>'
                +'<td>'+data[i][5]+'</td>'
                +'<td>'+data[i][6]+'</td>'
                +'<td>'+data[i][7]+'</td>'
                +'<td>'+data[i][8]+'</td>'
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
                +'<td>'+data[i][5]+'</td>'
                +'<td>'+data[i][6]+'</td>'
                +'<td>'+data[i][7]+'</td>'
                +'<td>'+data[i][8]+'</td>'
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


/!*广告状态*!/
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
});*/




/*
$(function(){
    $('#example').dataTable( {
        "autoWidth": false,
        "deferRender": true,
        "ordering": false,
        /!*"paging": false*!/
        "processing": true,
        "searching": false,
        "serverSide": true,
        "ajax": {
            "url": "WeChat-js/advertisingManagement.json",
            /!*"type": "POST",*!/
            "dataSrc": ""
            /!*"contentType": "application/json"*!/
            /!*"data": function ( d ) {
             return JSON.stringify( d );
             }*!/

        }
    } );
})*/




$(document).ready(function() {
    /*$('#example').dataTable( {
        "autoWidth": false,
        "deferRender": true,
        "ordering": false,
        "searching": false,
        "processing": true,
        "serverSide": true,
        "ajax": "http://192.168.0.115:8080/drawcashlist?draw=1"
    } );*/
    $('#example').dataTable({
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,//每页显示10条数据
        "bAutoWidth": false,//宽度是否自动，感觉不好使的时候关掉试试
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/drawcashlist",//?draw=1"+Math.random(),
            "type": "POST", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp"
        }
    });
} );







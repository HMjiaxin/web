/**
 * Created by a on 2016/3/25.
 */
function datatable(){
    var val=$('#search-input').val();
    if(val==null){
        val="";
    }
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
        "bDestroy":true,
        "autoWidth": false,
        "deferRender": true,
        "ordering": false,
        "searching": false,
        "sPaginationType": "full_numbers",
        "iDisplayLength": 10,//每页显示10条数据
        "lengthChange": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/cashmanage/rechargelist",
            "type": "get", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp",
            "data" : {
                userName : val
            }
        },
        "columns": [
            { "data": "businessName" },
            { "data": "contactPerson" },
            { "data": "score" },
            { "data": "operation",
                "render":function(data,opt,aa) {
                    operation = '<a href="#" data-toggle="modal" data-target="#myModal" onclick=myClick(' + aa.businessId + ',this)>操作</a>'
                    return operation
                }
            }
        ]
    });
}
datatable();
$('#search-btn').click(function(){
    datatable();
});
var id=null;
function myClick(a,e,obj){
    $('.top-up-input').val('');
    $('.top-up-prompt').html('');
    id=a;
    $('#record').dataTable({
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
        "bDestroy":true,
        "autoWidth": false,
        "deferRender": true,
        "ordering": false,
        "searching": false,
        "sPaginationType": "full_numbers",
        "iDisplayLength": 5,
        "lengthChange": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/cashmanage/rechargehistorylist",//?draw=1"+Math.random(),
            "type": "get", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp",
            "data" : {
                businessId : a
            }
        },
        "columns": [
            { "data": "businessName" },
            { "data": "score" },
            { "data": "description" },
            { "data": "createDate"}
        ]
    });
}

$('.top-up-btn').click(function(){
    var val=$('.top-up-input').val();
    var reg=/^[0-9]*[1-9][0-9]*$/;
    if(reg.exec(val)){
        $('.top-up-prompt').html(' ');
        $.ajax({
            type: 'GET',
            url: 'http://192.168.0.115:8080/cashmanage/recharge',
            dataType: 'jsonp',
            data: {
                businessId : id,
                score : val
            },
            success : function(data){
                console.log(data);
                $('.top-up-prompt').html('充值成功').css({'color':'green'});
                $('.top-up-input').val('');
            }
        });
    }else{
        $('.top-up-prompt').html('请输入正确的数字').css({'color':'red'});
    }
});



$('#myModal').on('hidden.bs.modal', function (e) {
    location.reload(true)
});










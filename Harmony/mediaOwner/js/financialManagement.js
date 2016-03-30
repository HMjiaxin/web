/**
 * Created by a on 2016/3/28.
 */
var type=0;
var businessId=10001;
function datatable(){
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
        "iDisplayLength": 10,//每页显示10条数据
        "lengthChange": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/account/history",
            "type": "get", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp",
            "data" : {
                businessId : businessId,
                type : type
            }
        },
        "columns": [
            { "data": "id" },
            { "data": "score" },
            { "data": "description" },
            { "data": "status",
                "render":function(data){
                    if(data==3){
                        state='<span class="text-danger">拒绝</span>'
                    }else if(data==0){
                        state='<span class="text-success">完成</span>'
                    }else if(data==2){
                        state='<span>处理中</span>'
                    }else{
                        state='<span>申请提交</span>'
                    }
                    return state
                }
            },
            { "data": "createdDate"}
        ]
    });
}
datatable();

$('.record-btn').find('input').click(function(){
    var e=$(this).val();
    $('.record-btn').find('input').removeClass('active');
    $(this).addClass('active');
    function record(e){
        if(e=='所有记录'){
            return 0
        }else if(e=='收入记录') {
            return 2
        }else if(e=='提现记录') {
            return 1
        }
    }
    type =record(e);
    datatable(type)
});
var balance=null;
$('.apply-btn').click(function(){
    $('.content-apply').show();
    $('.content-info').hide();
    $.ajax({
        type: 'GET',
        url: 'http://192.168.0.115:8080/getscore',
        dataType: 'jsonp',
        data: {
            businessId : businessId
        },
        success: function(data){
            balance=data;
            $('#balance').html(data);
        }
    });
});

$('.draw-money-btn').click(function(){
    var val=$('.ipt-money').val();
    console.log(balance);
    console.log(val);
    var reg=/^[0-9]*[1-9][0-9]*$/;
    if(reg.exec(val)&&val<=balance){
        $('.reg-prompt').html(' ');
        $.ajax({
            type: 'GET',
            url: 'http://192.168.0.115:8080/drawcashapply',
            dataType: 'jsonp',
            data: {
                businessId : businessId,
                score : val
            },
            success : function(data){
                location.reload(true);
            }
        });
    }else if(reg.exec(val)&&val>balance){
        $('.reg-body').show();
        $('.reg-prompt').html('提现金额不能大于余额');
    }else{
        $('.reg-body').show();
        $('.reg-prompt').html('请输入正确的数字');
    }
});











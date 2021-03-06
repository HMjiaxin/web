/**
 * Created by a on 2016/3/10.
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
        "bAutoWidth": false,//宽度是否自动，感觉不好使的时候关掉试试
        "lengthChange": false,
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "http://192.168.0.115:8080/cashmanage/drawcashlist",//?draw=1"+Math.random(),
            "type": "get", // 这里以什么方式请求服务器，服务器端就以什么方式接收参数
            "dataType":"jsonp",
            "data" : {
                keyword : val
            }
        },
        "columns": [
            { "data": "id" },
            { "data": "businessName" },
            { "data": "weChat" },
            { "data": "contactPerson" },
            { "data": "score" },
            { "data": "drawCashScore" },
            { "data": 'status',
                "render":function(data,opt,aa){
                    var self=this;
                    console.log(aa);
                    if(data==3){
                        select='<span class="text-danger">拒绝</span>'
                    }else if(data==0){
                        select='<span class="text-success">结束</span>'
                    }else{
                        select='<select onchange=myChange('+data+','+aa.id+',this)>'
                        +'<option value="1" '+(data==1?'selected':'')+' '+(data>1?'disabled':'')+'>申请提现</option>'
                        +'<option value="2" '+(data==2?'selected':'')+'>处理中</option>'
                        +'<option value="3">拒绝</option>'
                        +'<option value="0">结束</option>'
                        +'</select>'
                    }
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
}
datatable();
function myChange(a,e,obj){
    var changeStatus=obj.value;
    var f=obj.parentNode;
    if(changeStatus==2){
        obj.innerHTML='<option value="1" disabled>申请提现</option>'
        +'<option value="2" selected>处理中</option>'
        +'<option value="3">拒绝</option>'
        +'<option value="0">结束</option>';
    }else if(changeStatus==3){
        f.innerHTML='<span class="text-danger">拒绝</span>'
    }else if(changeStatus==0){
        f.innerHTML='<span class="text-success">结束</span>'
    }
    $.ajax({
        type: 'GET',
        url: 'http://192.168.0.115:8080/cashmanage/updateStatus',
        dataType: 'jsonp',
        data: {
            id : e,
            status : changeStatus
        },
        success: function(data){
            console.log(data)
        }
    });
}

$('#search-btn').click(function(){
    datatable();
});








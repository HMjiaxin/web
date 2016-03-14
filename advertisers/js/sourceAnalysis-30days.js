/**
 * Created by a on 2016/1/5.
 */

/*指标选择----只能选一个*/
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

    if(opts.length >1){
        $($(":checkbox[name='zb']").get(opts.shift())).attr("checked", false);
        $("#zb-show").children("span:eq(0)").remove();
    }

}

































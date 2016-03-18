/**
 * Created by a on 2016/2/2.
 */
$.formValidator.initConfig({formID:"myform",debug:false,submitOnce:true,
    validatorGroup : "1",
    onSuccess : function(){},
    onError:function(msg,obj,errorlist){
        $("#errorlist").empty();
        $.map(errorlist,function(msg){
            $("#errorlist").append("<li>" + msg + "</li>")
        });
    },
    submitAfterAjaxPrompt : '有数据正在异步验证，请稍等...'
});
$("#inputPhone").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : " ",
    onCorrect :" "
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"手机号两边不能有空符号"},onError:"手机号不能为空,请确认"
}).regexValidator({
    regExp : "^[0-9]{11}$",
    onError : "请输入正确的手机号码"
});



$.formValidator.initConfig({formID:"myform1",debug:false,submitOnce:true,
    validatorGroup : "2",
    onSuccess : function(){},
    onError:function(msg,obj,errorlist){
        $("#errorlist").empty();
        $.map(errorlist,function(msg){
            $("#errorlist").append("<li>" + msg + "</li>")
        });
    },
    submitAfterAjaxPrompt : '有数据正在异步验证，请稍等...'
});
$("#inputPhone1").formValidator({
    validatorGroup : "2",
    onShow : " ",
    onFocus : " ",
    onCorrect :" "
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"手机号两边不能有空符号"},onError:"手机号不能为空,请确认"
}).regexValidator({
    regExp : "^[0-9]{11}$",
    onError : "请输入正确的手机号码"
});


$('#inputLogin').click(function(){

});












{}
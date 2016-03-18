/**
 * Created by a on 2016/1/22.
 */

$.formValidator.initConfig({formID:"myform",debug:false,submitOnce:true,
    validatorGroup : "1",
    onSuccess : function(){
        $('.content-tab>span:first-child').css('background-color','#fff');
        $('.content-tab>span:last-child').css('background-color','#00a65a');
        $('#myform').hide();
        $('.zc-success').show();
    },
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
    onFocus : "请输入常用的手机号码",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"手机号两边不能有空符号"},onError:"手机号不能为空,请确认"
}).regexValidator({
    regExp : "^[0-9]{11}$",
    onError : "请输入正确的手机号码"
});



$("#inputNote").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "请输入您收到的短信验证码",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"验证码两边不能有空符号"},onError:"验证码不能为空,请确认"
}).regexValidator({
    regExp : "^[0-9]{6}$",
    onError : "验证码输入不正确"
});

$("#inputPassword").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "密码为6-16位数字、26个英文字母或者下划线的组合",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"
}).regexValidator({
    regExp : "^\\w{6,16}$",
    onError : "你输入的密码不符合要求，请重新输入"
});
// 确认密码 - 两次密码一致
$("#inputConfirmPassword").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "密码为6-16位数字、26个英文字母或者下划线的组合",
    onCorrect : "&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"
}).regexValidator({
    regExp : "^\\w{6,16}$",
    onError : "你输入的密码不符合要求，请重新输入"
}).compareValidator({
    desID : "inputPassword",
    operateor : "=",
    onError : "两次密码输入不一致"
});

$("#inputPeople").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "请输入您的姓名",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"姓名两边不能有空符号"},onError:"姓名不能为空,请确认"
}).regexValidator({
    regExp : "^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,15}$",
    onError : "请输入正确的姓名"
});


$("#inputEmail").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "请输入常用的邮箱",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"邮箱两边不能有空符号"},onError:"邮箱不能为空,请确认"
}).regexValidator({
    regExp : "^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$",
    onError : "邮箱格式不正确"
});

$("#inputQQ").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "请输入常用的QQ号(选填)",
    onCorrect : "&nbsp;"
}).regexValidator({
    regExp : "^[0-9]{0,12}$",
    onError : "请输入正确的QQ号"
});

$(":checkbox[name='agreed']").formValidator({
    onShow : " ",
    onFocus:"请仔细阅读服务条款",
    onCorrect:"&nbsp;"
}).inputValidator({
    min:1,onError:"必须同意服务条款才能注册"
});


/*$('#submit').click(function(){
    $('.content-tab>span:first-child').css('background-color','#fff');
    $('.content-tab>span:last-child').css('background-color','#00a65a');
    $('#myform').hide();
    $('.zc-success').show();
});*/


document.getElementById('inputPhone').onblur = function(){
    var uname = this.value;
    if(uname===''){
        return;
    }
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                doResponse(xhr.responseText);
            }else{
                alert('接收到一个非成功的AJAX响应：'+xhr.status);
            }
        }
    };

    xhr.open('GET','3.php?uname='+uname,true);

    xhr.send(null);


    function doResponse(txt){
        var div = document.querySelector('#inputPhoneTip');
        if(txt==='1'){
            div.innerHTML = '该用户名已被占用,请直接登录';
            $('#ajax-phone').show();
        }else{
            $('#ajax-phone').hide();
        }
    }
};
document.getElementById('inputPhone').onfocus = function(){
    $('#ajax-phone').hide();
};













/**
 * Created by a on 2016/1/25.
 */
$("#inputCompany").formValidator({
    validatorGroup : "1",
    onShow : " ",
    onFocus : "请输入您公司的名称",
    onCorrect :"&nbsp;"
}).inputValidator({
    min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"公司两边不能有空符号"},onError:"公司名不能为空,请确认"
}).regexValidator({
    regExp : "^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,15}$",
    onError : "请输入正确的公司名称"
});
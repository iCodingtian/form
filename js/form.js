/**
 * 立即提交
 */
function submitForm() {
    var pwd = document.getElementById('pwd').value;
    if (!pwd) {
        document.getElementById('valid').innerHTML = "密码不能为空";
        return false;
    }
    return false;
}
/**
 * 重置
 */
function reset() {
    document.getElementById('myForm').reset();
}

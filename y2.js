var nodeinput = document.getElementsByTagName('input');
var nodespan = document.getElementsByTagName('span');
function validate() {
    for (var i = 0; i < nodeinput.length; i++) {
        if (nodeinput[i].value == " ") {
            nodespan[i].innerHTML = "*";
        } else {
            nodespan[i].innerHTML = "";
        }
    }
}
function mail() {
    var reget_mail = /  [a-zA -Z0-9]+\@+[a-zA-Z]+\.+[a-zA-Z]{2,3} /;
    if (!reget_mail.test(nodeinput[2].value)) {
        nodespan[2].innerHTML = "Nhập sai định dạng";
    } else {
        nodespan[2].innerHTML = "";
    }
}

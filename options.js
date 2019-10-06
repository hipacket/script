var router = new VueRouter({
  mode: 'history',
  routes: []
});
var app = new Vue({
  router,
  el: '#app',
  data: {
    access_token: null,
    alert: {success: true, message: ''},
    convert_text: 'lowercase',
    text_img: null,
    cookie_fb: '',
    custom_page: false,
    pages: '',
    base_url: '',
  },
  mounted() {
    chrome.storage.sync.get(['access_token', 'pages', 'base_url'], result => {
      this.access_token = result.access_token || null;
      this.pages = result.pages || null;
      this.base_url = result.base_url || null;
    });
    chrome.cookies.getAll({url: 'https://www.facebook.com'}, cookie => {
      var result = '';
      for (var i = 0; i < cookie.length; i++) {
        result += cookie[i].name + "=" + cookie[i].value + "; ";
      }
      //result += 'useragent=' +btoa(navigator.userAgent).replace(/=/g, '%3D') + '; ';
      this.cookie_fb = result;
    });

  },
  computed: {
    isError: function() {
      if(this.alert.success) return false;
      else return true;
    },
    isSuccess: function() {
      return !this.isError;
    },
    pages_text: function() {
      try {
        return this.pages.map(page => {
          return `${page.name}|${page.id}|${page.access_token}`;
        }).join('\n');
      } catch(e) {
        console.log('Lỗi định dang danh sách page');
        return null;
      }
    }
  },
  methods: {
    setAccessToken() {
      chrome.storage.sync.set({access_token: this.access_token});
      try {
        if(this.pages_text && this.custom_page) {
          var list_page = this.pages_text.split(/\s*\n+\s*/);
          this.pages = list_page.map(page => {
            item = page.split(/\s*\|\s*/); 
            return {name: item[0], id: item[1], access_token: item[2]};
          });
        }
      } catch(e) {
        this.alert = {success: false, message: 'Lỗi danh sách page không đúng định dạng'};
        return;
      }
      this.fb('/me/accounts?fields=name,id,access_token&limit=50&access_token=' + this.access_token, 'GET', null, pages => {
        if(!this.custom_page && !pages.error) {
          this.pages = pages.data;
        }
        chrome.storage.sync.set({pages: this.pages});
        this.alert = {success: true, message: 'Lưu token thành công!'};
      });
    },
    getUrlAff() {
      var _urlShopee = this.$refs.urlShopee;
      var url = _urlShopee.$el.value;
      if(!url || !this.base_url) {
        alert('Bạn chưa nhập link sản phẩm hoặc chưa có base url');
        return;
      }
      chrome.storage.sync.set({base_url: this.base_url});
      url = this.base_url + '?url=' + encodeURIComponent(url.split(/\?|#/)[0]);
      
      axios(url).then(response => {
        if(response.data && (matches = /<meta property='og:url' content='(.*?)'/g.exec(response.data))) {
          var tmp_url = matches[1];
          axios(tmp_url, {
            method: 'HEAD'
          }).then(response => {
            if(response.request && response.request.responseURL) {
              _urlShopee.$el.value = response.request.responseURL;
              _urlShopee.select();
            } else {
              alert('Không tạo được link');
            }
          }).catch((e) => {
            console.log(e);
            alert('Có lỗi xảy ra');
          })
        }
      }).catch((e) => {
        console.log(e);
        alert('Có lỗi xảy ra');
      })
    },
    loginFB(evt) {
      let cookie_arr = this.$refs.cookieFB.$el.value.split(/\s*;\s*/);
      if(cookie_arr.length < 5) {
        alert('Cookie không đúng, vui lòng thử lại');
        return;
      }
      //remove current cookie
      chrome.cookies.getAll({ domain: "facebook.com" }, function (all_cookies) {
        var count = all_cookies.length;
        for (let cookie of all_cookies) {
          var url = 'http' + (cookie.secure ? 's' : '') + '://' + cookie.domain + cookie.path;
          chrome.cookies.remove({ "url": url, "name": cookie.name });
        }
        //đang nhập vào cookie mới

        for(let ca of cookie_arr) {
          try {
            var c = ca.split('=');
            if(c.length > 0) {
              var name = c[0].trim();
              var val = c[1].trim();
              chrome.cookies.set({ url: "https://www.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://web.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://m.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://mbasic.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://developers.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://upload.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://mobile.facebook.com", name: name, value: val });
              chrome.cookies.set({ url: "https://business.facebook.com", name: name, value: val });
            }
          } catch (ex) {
            console.log(ex);
          }
        }
        alert('Đăng nhập Facebook thành công');
      });
    },
    downloadVideo(evt) {
      let url = this.$refs.urlVideo.$el.value;
      let matches = /(videos|photos|posts|fbid|permalink).*?[\/,=](\d+)/g.exec(url);
      if(matches.length === 3) {
        this.fb(matches[2], 'GET', {
          'fields': 'source,title',
          'access_token': this.access_token
        }, data => {
          if(data.error) {
            this.alert = {success: false, message: 'Lỗi khi lấy link download'};
          } else {
            let options = {url: data.source};
            if((matches = /\.(mp4|ogg|mov|wmv|flv|avi)/.exec(data.source)) && data.title) {
              let name = data.title.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]|[:])/g, '');
              options.filename = name + matches[0];
            }
            chrome.downloads.download(options);
          }
        });
      } else {
        this.alert = {success: false, message: 'Tool chưa hỗ trợ link này!'};
      }
    },
    changeTypeConvertText(value) {
      this.convert_text = value;
      this.convertText();
    },
    convertText() {
      let inputText = this.$refs.convertText;
      let value = inputText.$el.value;
      if(this.convert_text === 'lowercase') {
        value = value.toLowerCase();
      } else if(this.convert_text === 'uppercase') {
        value = value.toUpperCase();
      } else if(this.convert_text === 'uppercase_first') {
        value = value.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
      }
      inputText.value = value;
    },
    fb(url, method = 'GET', params = {}, callback) {
      let options = {
        baseURL: 'https://graph.facebook.com/v3.2/',
        method: method,
        params: params
      };
      axios(url, options).then(response => {
        callback(response.data);
      }).catch(error => {
        callback({error: error.message});
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', init, false);

function init(){
  adsBlocked(function(blocked){
    if(blocked){
      document.getElementById('result').innerHTML = '';
    } else {
      document.getElementById('result').innerHTML = 'ProTip: you can get rid of all annoying advertisements from every website with ublock origin - get it for <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en">chrome</a> or <a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/">firefox</a> ';
    }
  })
}

function adsBlocked(callback){
  var testURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

  var myInit = {
    method: 'HEAD',
    mode: 'no-cors'
  };

  var myRequest = new Request(testURL, myInit);

  fetch(myRequest).then(function(response) {
    return response;
  }).then(function(response) {
    console.log(response);
    callback(false)
  }).catch(function(e){
    console.log(e)
    callback(true)
  });
}

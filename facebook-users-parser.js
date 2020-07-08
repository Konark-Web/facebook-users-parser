var result = "\n";

var INTERVAL = window.setInterval(function() {
      window.clearInterval(INTERVAL);
      var items = document.querySelectorAll('#repost_view_dialog .userContentWrapper');
      for (var i=0; i < items.length; ++i)
      {
        var account = items[i].querySelector('.fwb.fcg > a');
        result += account.textContent + '\n';
      }

      console.log(result);
}, 700);

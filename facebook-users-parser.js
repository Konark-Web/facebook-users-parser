var result       = "\n";
 
var INTERVAL = window.setInterval(function() {
      window.clearInterval(INTERVAL);
      var items = document.querySelectorAll('#jsc_c_13');
      for (var i=0; i < items.length; ++i)
      {
        if (i == 0) {
            continue; // skip author name
        }

        var accountName = items[i].querySelector('a span');
        result += accountName.textContent + '\n';
      }
 
      console.log(result);
}, 700);

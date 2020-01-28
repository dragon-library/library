
$(document).ready(function () {
  for (var i = 0; i < 60; i++) {
    $('.container_second').append('<div class="seconds"/>');
  }

  function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }

  var deg = 264;
  for (var i = 1; i < 61; i++) {
    deg = deg + 6;
    console.log(deg + " : " + i);
    $('.seconds:nth-child(' + i + ')').css({
      '-webkit-transform': 'rotate(' + deg + 'deg) translatex(120px)',

      'opacity': '0.1'
    });
  }

  console.log('__________________________________________________');
  var deg2 = 264;
  for (var i = 1; i < 61; i++) {
    deg2 = deg2 + 6;
    console.log(deg);
    $('.minutes:nth-child(' + i + ')').css({
      '-webkit-transform': 'rotate(' + deg2 + 'deg) translatex(160px)',
      'opacity': '0.1'
    });
  }
  console.log('__________________________________________________');
  var deg3 = 240;
  for (var i = 1; i < 13; i++) {
    deg3 = deg3 + 30;
    console.log(deg3 + " : aaaaaaaaaaaaa   " + i);
    $('.hours:nth-child(' + i + ')').css({
      '-webkit-transform': 'rotate(' + deg3 + 'deg) translatex(110px)',
      'opacity': '0.1'
    });
  }




  var t = setInterval(function () {
    var d = new Date();
    var space = "";
    $(".time").text(space);


  

    console.log(time);
    if (d.getHours() > 12) {
      var time = zeroPadding(d.getHours(), 2) + ":" + zeroPadding(d.getMinutes(), 2) + ":" + zeroPadding(d.getSeconds(), 2);
      var h = d.getHours() - 12;
    } else {
      var time = zeroPadding(d.getHours(), 2) + ":" + zeroPadding(d.getMinutes(), 2) + ":" + zeroPadding(d.getSeconds(), 2);
      var h = d.getHours();
    }
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    //var h = d.getHours()-12;
    var m = d.getMinutes();
    var s = d.getSeconds();

  

    for (var i = 1; i <= s + 1; i++) {
      if (s === 0) {
        $('.seconds').css({


          'opacity': '0.1'

        });
      }
      $('.seconds:nth-child(' + i + ')').css({


        'opacity': '1'
      });
    }
    for (var i = 1; i <= m + 1; i++) {
      if (m === 0) {
        $('.minutes').css({

          'opacity': '0.1'
        });
      }
      $('.minutes:nth-child(' + i + ')').css({

        'opacity': '1'
      });
    }
    for (var i = 1; i <= h + 1; i++) {
      if (h === 0) {
        $('.hours').css({

          'opacity': '0.1'
        });
      }
      $('.hours:nth-child(' + i + ')').css({

        'opacity': '1'
      });
    }
    $('.time').text(time);
  }, 1000);
});
var html =
  '<h2>Pesan Berhasil Terkirim</h2><h3>Anda akan diarahkan ke halaman utama</h3><h4 class="timer">10</h4><p>Dibuat Oleh :</p><a href="https://youtube.com/@wildanmiladji108" class="yt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" height="30px" alt="" srcset="" />Wildan mill</a><div class="banner"><p>projek bucin</p><a href="https://youtube.com/@wildanmiladji108"><img src="https://google/" alt="" /></a></div>';

document.querySelector("body").innerHTML += html;

timer = document.querySelector(".timer");
var time = timer.innerHTML;

function timeku(linkku) {
  timer.innerHTML = time;
  console.log(time);
  if (time == 0) {
    window.location.replace(linkku);
    // console.log(linkku);
  } else {
    time--;
    setTimeout(function () {
      timeku(linkku);
    }, 1000);
  }
}

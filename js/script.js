  $(function() {
    $("ul.menu li").hover(
      function() {
        $(".dropdwn-menu:not(:animated)", this).slideDown('fast');
      },
      function() {
        $(".dropdwn-menu", this).hide();
      }
    );
  });
$(function() {
  $(window).scroll(function() {
    var value = $(this).scrollTop();  //スクロール値を取得
    value = value / 10
      $('.main-bg-02').css('transform', 'translateY(' + value + 'px)');
  });
});

$(".nav-btn").on("click",function(){
  $(this).toggleClass("active");
  $(".menu").slideToggle(200);
});


const listener = () => {
  // リサイズ時に行う処理
  if (window.matchMedia('(min-width: 1184px)').matches) {
    $(".menu").removeAttr('style');  //当てたスタイルを外す
    console.log('PC用ブレークポイント用処理');
  } else {
    if ($(".nav-btn").hasClass("active")) {  // ナビが開いていたら
      $(".nav-btn").toggleClass("active");   // ハンバーガーアイコンを元に戻す
      $(".menu").slideToggle();             // ナビを閉じる（非表示にする）
    }
    console.log('SP用ブレークポイント用処理');
  }
};

// リスナー登録
window.addEventListener('resize', listener);

// 初期化処理
listener();


/* 
$(document).ready(function() {
  var checkResize;
  $(window).on('load resize', function() {
      clearTimeout( checkResize );
      checkResize = setTimeout( resizing, 100 );
  });

  //リサイズ完了時に実行する処理
  function resizing() {
    var w = $(window).width();

    //ウィンドウサイズが1184より大きい場合の処理
    if( w > 1184 ) {
      $(".menu").removeAttr('style');  //当てたスタイルを外す

    //ウィンドウサイズが1184以下の場合の処理
    } else {
      if ($(".nav-btn").hasClass("active")) {  // ナビが開いていたら
        $(".nav-btn").toggleClass("active");   // ハンバーガーアイコンを元に戻す
        $(".menu").slideToggle();             // ナビを閉じる（非表示にする）
      }
    }
  }
});
 */

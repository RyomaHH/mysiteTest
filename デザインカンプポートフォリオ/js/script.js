$(function(){
  var imgHeight = $('.kv-img').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.bg-gry').outerHeight(); //ファーストビューの高さを取得

  $(".hamburger").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーボタンがfvより上にあるとき
      $('.bar').toggleClass('cross'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.header-nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.burger-mask').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    }else{
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-mask').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.site-logo').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.site-logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.hamburger').removeClass('black');
    }else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.hamburger').addClass('black');
    }
 });






});



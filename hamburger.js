$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
        
    });
});

// クリックイベント全てに対しての処理
$(document).on('click touchend', function(event) {
    // 表示したポップアップ以外の部分をクリックしたとき
    if (!$(event.target).closest('.hamburger').length) {
        if ($('.hamburger').hasClass('active')){
            $('.hamburger').toggleClass('active');
            $('.globalMenuSp').removeClass('active');
        }
    }
});

$(window).on('load',function(){
    console.log(document.referrer);
    //自分のサイト以外から来たかどうか確認
    
    if(document.referrer.indexOf("index")== -1){
        console.log("No index");
    }
    else{
        console.log("Yes index");
        $('header').toggleClass('active');
        $('.hamburger').toggleClass('slide');
    }

});
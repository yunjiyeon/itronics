/* 스크롤이 되면 헤더 배경색이 들어감 */

$(window).scroll(function(){
    $('#header_wrap').addClass('scroll');

    // if($(window).scrollTop() <= 300) 위에서부터 300px 뒤부터 실행하고 싶을 때

    if($(window).scrollTop() == 0){ // 화면 제일 위에 있을 때
        $('#header_wrap').removeClass('scroll');

    } 
});

// .scrollTop()     스크롤바 위치를 알아오거나 정함



/* 모바일 상태에서 햄버거 버튼을 누르면 메뉴가 보인다 */

$('.m_menuBtn').click(function(){
    $(this).toggleClass('on');
    // $('.menu_container').toggle(); // toggle 은 show 와 hide 가 반복
    // $('.menu_container').fadeToggle(); // fadeToggle 은 fadeIn 과 fadeOut 반복

    if($(this).hasClass('on')){ // hasClass : class 존재 여부를 확인
        // 'on' class가 존재하면 아래 속성 적용
        $('.menu_container').fadeIn();
        $('body').css({'overflow':'hidden'});
    } else {
        // 'on' class가 존재하지 않으면 아래 속성 적용
        $('.menu_container').fadeOut();
        $('body').css({'overflow':'unset'});
    }

});


$(window).resize(function(){
    let winW = $(window).width();//브라우저의 가로 길이를 변수에 
    console.log('브라우저의 가로 길이는?', winW);

    if( winW > 1023 && $('.menu_container').is(':hidden')){
        console.log('nav가 안 보여요');
        $('.menu_container').removeAttr('style');
    }
});
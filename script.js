// SERVICES
let currentTab = $('.services-tabs li.active');
let currentContent = $('.tab-content.active');

$('.services-tabs li').on('click', function () {
    currentTab.removeClass('active');
    currentContent.removeClass('active');

    currentTab = $(this);
    currentContent = $($(this).attr('data-item'));

    currentTab.addClass('active');
    currentContent.addClass('active')
})

// $('.services-tabs li').on('click', function () {

//     $('.services-tabs li.active').removeClass('active');
//     $('.tab-content.active').removeClass('active');

//     $(this).addClass('active');
//     $($(this).attr('data-item')).addClass('active');
// })


// CREATE GORIZONTAL LINE AFTER SECTION-TITLES
$('.section-title').after('<hr class="hr">').after('<hr class="hr-left">');



/*AMASING-WORK
===============================================  */

$(`.amasing-tabs .tab`).click(activateCards);

function activateCards() {

    $('.card.active').removeClass('active');
    $('.tab.active').removeClass('active');
    $(this).addClass('active');
    const data = $(this).attr("data-it");
    if (data === 'all') {
        $('.card.first').addClass('active');
    }
    $(`.card.${data}`).addClass('active');
}

// LOADER-BUTTON

$('.load .button').click(onClickLoaderBtn);

function onClickLoaderBtn(event) {
    event.preventDefault();
    $('.loader').addClass('active');
    setTimeout(function () {
        $('.loader.active').removeClass('active')
        $('.second').addClass('active');
        $('.load.active').removeClass('active')
    }, 3000);
}



/* WHAT PEOPLE SAY ABOUT US 
===========================================*/

$('.ref-tab').click(onClickReferenceTab);

function onClickReferenceTab() {
    $('.ref-tab').removeClass('active');
    $(this).addClass('active');

    setTimeout(() => {
        $('.reference-slide').removeClass('active');
        $($(this).attr('data-target')).addClass('active');
    }, 200)
}




$('.fa-angle-left').click(createCarusel);

$('.fa-angle-right').click(createCarusel);

function createCarusel(event) {
    const cur = $('.ref-tab.active');
    let ind = $('.ref-tab').index(cur);

    if ($(this).hasClass('fa-angle-left')) ind -= 1;
    else ind += 1;

    if (ind === -1) ind = 3;
    if (ind === 4) ind = 0;

    $('.ref-tab.active').removeClass('active');
    $('.reference-slide').removeClass('active');

  
    $($('.ref-tab')[ind]).addClass('active');
    $($($('.ref-tab')[ind]).attr('data-target')).addClass('active');
    // $($('.reference-slide')[ind]).addClass('active')
}
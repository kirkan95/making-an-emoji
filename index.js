// $( document ).ready(function() {
//     $('#row-text').hide();
//     $('.emojicol').mouseenter( function(){
//         debugger
//         let unicode = getEmojiText($(this).text().codePointAt());
//         $('#row-text').text(unicode);
//         $('#row-text').addClass('d-flex');
//         $('#row-text').addClass('justify-content-center');
//         $('#row-text').fadeIn();
//     } ).mouseleave( function(){
//         $('#row-text').fadeOut();
//         setTimeout(function(){
//             $('#row-text').removeClass('d-flex');
//             $('#row-text').removeClass('justify-content-center');
//         },500)
        
//     } );
// })

// function getEmojiText(input) {
//     switch (input){
//         case 10: return 'This is the whisky stuff. Apple does not like ice';
//     }
//     return 'blah blah blah';
// }

// function gridDisappear(){
//     const grid = document.getElementsByClassName("container grid");
//     grid.style.display = "none";
// }

$( document ).ready(function() {
    $('.story').css('marginLeft', '25%')
    function gridShift(){}
    $('.emojicol').click(function(){
        $('.textbox').animate({left: "-50%"});
        $('.grid').animate({left: "-50%"});
        $('.grid').css('opacity', '0.2');
    })
})   

// The below code executes the gridShift function on page load, which I don't want. I want it to execute onClick. 

// $( document ).ready(function() {
//     $('.emojicol').click(gridShift())
// })

// function gridShift(){
//     $('.grid').animate({marginLeft: "-=50%"});
//     $('.grid').css('opacity', '0.2');
// }
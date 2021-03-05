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

$(document).ready(initialize);

function initialize() {
    // a great css trick for giving the display: none attribute
    $(".textbox").css("display", "none");
    // $(".textbox").hide();

    // Things you can do with jQuery! You can be very specific with selector names 
    //$('.content-one h2').css('font-size','55pt');

    // TODO on emoji click I want to show the hidden text field
    // TODO render the text field under the row of the emoji I am on
    // TODO make sure it's smooth
    // TODO on click out, it disappears

    // Every time I click any element that has the emojicol class, do the contents below
    $(".emojicol").click(function () {
        // We shall call "this". <--- is a keyword that refers to the object it belongs to
        let thisEmoji = $(this);
        console.log(thisEmoji);

        // FC 3.2.2021 - We talked about how to get the element that is calling this particular function
        // and we will attempt to attach the textbox element under the row of the element that triggered
        // this event. 

      $("#textbox").css("display", "block");
      $("#textbox").animate({ left: "-25%" });
      $("#grid").animate({ left: "-25%" });
      $("#grid").css("opacity", "0.2");
    });

    $(".pickupTruck").click(function () {
      $("emojiText").text("Your text has been replaced!");
    });
}


// a little something about if statements
function myFunction2() {
    if (1 === 1) {
        console.log('This is true');
    } else {
        console.log('this is false');
    }
    console.log('Hello Kirk');
}


// 3.2.2021 - a little something about loops
function myFunction3(index) {
    // old way of writing for loops
    // i = 0; if i < 100, do whatever is in this loop; i = i + 1
    for (var i = 0; i < 100; i++) {
        console.log('Index : ' + i);
    }

    while (index < 100) {
        console.log('Index : ' + index);
        index += 2; // index = index + 2
    }
}

// $(document).ready(function () {
//   $(".textbox").css("display", "none");
//   $(".emojicol").click(function () {
//     $(".textbox").css("display", "block");
//     $(".textbox").animate({ left: "-25%" });
//     $(".grid").animate({ left: "-25%" });
//     $(".grid").css("opacity", "0.2");
//   });
//   $(".pickupTruck").click(function () {
//     $("emojiText").text("Your text has been replaced!");
//   });
// });   

// The below code executes the gridShift function on page load, which I don't want. I want it to execute onClick. 

// $( document ).ready(function() {
//     $('.emojicol').click(gridShift())
// })

// function gridShift(){
//     $('.grid').animate({marginLeft: "-=50%"});
//     $('.grid').css('opacity', '0.2');
// }
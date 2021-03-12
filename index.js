let data = []; // Global array called data

$(document).ready(initialize);

function initialize() {
    $("#wrapper").hide();

    // Function which will load the data
    loadDataFromJSON();

    // When I click on an any element that bears the emojicol class...
    $(".emojicol").click(function () {
        let e = $(this); // Shorthand this variable because I know I am getting the jQuery of this element
        let str = convertEmojiToUnicode(e.text().trim()); // I use the function I wrote to obtain the code point of the emoji, which is found in the 'text' property of the variable

        for (let index in data) { // Iterate through data, letting 'index' be the index of data
            let item = data[index];
            /** Use an if statement to check the str variable against the item's id. If they are equivalent
             * apply the item's description to the #emojiText value
             */
            if (str == item.id) 
                $('#emojiText').text(item.description);
        }
        $("#story").css("opacity", "0.2");
        $("#wrapper").fadeIn();
        //$("html, body").animate({
        //    scrollTop: $("#wrapper").offset().top
        //}, 300);
        //$("#wrapper").animate({ left: "-25%" });
        //$("#grid").animate({ left: "-25%" });
    });

    // If you can, always drill down to specific elements for individual functions
    $("#close").click(function () {
        //$("#wrapper").animate({ left: "0%" });
        //$("#grid").animate({ left: "0%" });
        $("#wrapper").fadeOut(function() {
            $("#story").css("opacity", "1");
        });
    });
}

/**
 * This is a function which handles just the JSON loading. There exists a global
 * variable which will be populated on success of this AJAX call
 */
function loadDataFromJSON() {
    $.ajax({
        dataType: "json",
        url: "data.json", // As you can see here I am pulling data from this URL
        success: function (e) { data = e; }
      });
}

function convertEmojiToUnicode(str) {
    // If the string length is less than 4
    if (str.length < 4)
        return str.codePointAt(0).toString(16); // return the code point of the entire string
    // handles the 0x0000 cases I guess, for future emojis  
    return str.codePointAt(0).toString(16) + '-' + str.codePointAt(2).toString(16);
};
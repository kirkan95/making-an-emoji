$(document).ready(initialize);

function initialize() {
    $("#hidden-textbox").css("display", "none");

    // When I click on an any element that bears the emojicol class...
    $(".emojicol").click(function () {
        let e = $(this); // Shorthand this variable because I know I am getting the jQuery of this element
        let str = convertEmojiToUnicode(e.text().trim()); // I use the function I wrote to obtain the code point of the emoji, which is found in the 'text' property of the variable

        console.log(str); // This logs the emoji in Unicode

        let emojiText; // Create a variable without initializing it. This works for some primitive types

        /** 
         * 3.13.2021
         * This is a switch-case statement. It acts as an logical operation similar to 
         * if-else statements but a little more primitive.
         * 
         * For quick and dirty work such as this one, you can use a switch statement 
         * for comparisons that have multiple values. If-else statements work just 
         * as fine but this is a simplified version of doing the same thing.
         * */

        switch (str) {
            case '1f6fb': // Same thing as saying if (str == '1f6fb')
                emojiText = "You can thank Dwayne the Rock Johnson for the availability of the all-American vehicle on your keyboard. According to Eric Grenier of Ford, The Rock’s complaint about the lack of a pickup truck emoji spurred them into action, and after a $50,000 marketing push, the emoji was released in 2019. Previous versions looked very similar to the Ford F-150—on purpose, of course.";
                break;
            case '1f468-1f3fc':
                emojiText = 'Tinder has been a driving force behind the diversity of the couples you see on your emojis keyboard. Their Change.org petition had 52,520 supporters. They wrote: “While emojis for people of color and emojis for same-sex couples both became a reality in 2015, one group of people is still excluded from emoji representation: interracial couples. Isn’t it time all love was represented?';
                break;
            case '1f943':
                emojiText = 'Scotch whisky brand Ballantine’s began a #whiskyemoji campaign in 2014—back when the only alcohol emojis to choose from were beer, wine and cocktails. Whether or not the campaign was the actual reason for the addition of the “tumbler glass” emoji in the Unicode Version 9 update is unknown, but the company was delighted to finally have their product represented. Fun fact: Apple’s version of the emoji is the only version undiluted by ice.';
                break;
                // below lines are minimized to save space
            case '1f9c3': emojiText = 'You’ll see the name Jennifer 8. Lee appear a lot in conversations about the Unicode Consortium. The journalist, producer and now vice-chair on the Unicode Emoji Subcommittee is one of the most influential voices when it comes to which emojis appear on your keyboard. Her submission for the juice emoji, for example, was a push back on the dietary implications of having (at the time in 2018) eight alcohol emojis but no juice.';break;
            case '1f375': emojiText = 'For many in countries like Argentina, Uruguay, Paraguay, Brazil, Chile and Syria, the lack of a maté emoji was a serious oversight that resulted in a cultural cornerstone going unrepresented. The proposal for a maté emoji was chock full of photos of celebrities enjoying the herbal drink. “…Around the world, maté is served usually on daily basis,” the proposal argued.';break;
            case '1f481-1f3fe': emojiText = 'A writer at The Atlantic found that after the Unicode Consortium released skin tone emoji preferences in 2015, only 19% of Tweets used the lightest skin tone, 30% used the second-lightest, and the remaining 52% used the three darkest tones. He found that some found it awkward to use an “affirmatively white emoji”—especially when it could be seen as a statement of racial pride (e.g. white power).';break;
            case '1f608': emojiText = 'Devil emoji? Imp? The Unicode Consortium went with the official name of “smiling face with horns”—really, the most inoffensive one possible. For a potentially theologically controversial emoji, there’s been surprisingly little pushback on this emoji.';break;
            case '1fa80': emojiText = 'Heard of Doc Pop, yoyo extraordinaire? Me neither, until now. With the help of Emojination—Jennifer 8. Lee’s organization—this yoyo enthusiast pitched a proposal that was accepted by the Unicode Consortium in 2018.  While submitting, he gave examples of how people would use the yoyo emoji in a sentence (emotionally pulling on their strings, weight fluctuating).  “The paper that I wrote for them was basically like a high school history report of yoyo-ing,” he said. “Really boring stuff.”';break;
            case '1f94c': emojiText = 'As one might expect, Google search trends for “curling” are on average very low—except during the Winter Olympic Games. The popularity of the search term—potentially because many people have no clue how the sport is played—was a main argument in the proposal for this curling emoji.';break;
            case '1f961': emojiText = 'In 2017, when the Chinese takeout emoji was released, it seemed like a step forward in representation, especially for Chinese Americans. But it wasn’t without its hiccups. The first edition featured two red and black chopsticks—innocent enough—but they were stuck straight up in the food, a cultural no-no, since the image mimics the act of putting a stick of incense upright in a bowl of rice to honor the dead. It was later corrected, and now the takeout container and the chopsticks are separate emojis.';break;
            case '1f96f': emojiText = 'When was the last time Big Cream Cheese stretched out its mighty arm and harnessed its power to influence millions? Well, the bagel emoji was schmear-less until Philadelphia Cream Cheese brought this injustice to the Unicode Consortium’s attention. “The current dry, sad bagel emoji is unacceptable,” they lamented. “An emoji is meant to convey a message without words, but why would anyone want to convey a message of a bagel without cream cheese?” The bagel emoji is no longer naked, featuring a schmear of cream cheese. Ostensibly, Philadelphia brand.';break;
            case '1f354': emojiText = 'Grab your pitchforks—before correcting this egregious wrong, Google’s version of the burger emoji had the cheese slice underneath the burger patty and on top of the bread. Needless to say, the rage of a nation burned hotly against Google until they found the error of their ways.';break;
            case '1f346': emojiText = 'There’s no tactful way to say this, but since it appeared on keyboards in 2015, the eggplant emoji transcended its humble origins and landed the coveted/not-coveted position as one of the few phallic-appearing emojis allowed to still grace the Unicode Consortium.';break;
            case '1f32e': emojiText = 'It’s not clear how this became a thing or who gave this the green light, but Facebook had a “feeling fat” emoji option that’s not fit for viewing. It was essentially a smiley-face with a double chin. Rightfully so, there was a Change.org petition that called for its removal, and it was subsequently taken down. “When Facebook users set their status to ‘feeling fat,’” says the petition, “they are making fun of people who consider themselves to be overweight, which can include many people with eating disorders. That is not ok.”';break;
            case '1f99e': emojiText = 'Unsurprisingly, when Taco Bell execs realized that there were “four different types of mailboxes, and 25 different types of clocks,” but no taco emoji, they were up in arms. Taco Bell submitted a Change.org petition targeted at the Unicode Consortium in 2015, and the rest is history.';break;
            case '1f37a': emojiText = 'In 2017, a petition to add a lobster emoji was submitted by Senator Angus King from, you guessed it, Maine. One big problem—it was missing its fourth pair of legs. There was an outcry, and a quick re-adjustment.';break;
            // If you have quotes in here that break a string, use \ to break out of those offending characters
            case '1f9c6': emojiText = 'The burger emoji wasn’t Google’s only oopsie. The internet giant also messed up their beer order somehow, half-filling the mug while a disconnected cloud of foam still bubbled at the top. Upon fixing the issue, Google CEO Sundar Pichai tweeted, “I don\'t even want to tell you the explanation the team gave me as to why the foam was floating above the beer, but we restored the natural laws of physics.”';break;
            case '1f958': emojiText = 'When the original concept art for the falafel emoji was released in 2019, though it was long-awaited, it was not well-received. It lacked a certain sense of edibleness. According to Jewish publication forward, it resembled “soot-covered tennis balls, iced sloppily with phlegm.”';break;
            case '1f435': emojiText = 'Apple had to switch up the ingredients that it used in its original paella emoji, because the mussels, shrimp and peas weren’t the ones used in the traditional recipe from Valencia. It’s now redone with chicken, lima beans and green beans.';break;
            case '1f92d': emojiText = 'Everything was all good until Twitter user Jonny Sun asked whether the monkey emojis 🙈🙉🙊 were the same monkey or if they were three individual monkeys. The final results had just over half of the 211,701 people who voted say that it was the same monkey making three different faces. However, if the Unicode Consortium is to be believed, the monkeys are individual: “see-no-evil monkey,” “hear-no-evil monkey” and “speak-no-evil monkey.”'; break;
        }
        // Finally set the value of the corresponding text
        $('#emojiText').text(emojiText);

        $("#hidden-textbox").css("display", "block");
        $("html, body").animate({
            scrollTop: $("#wrapper").offset().top
        }, 300);
        $("#hidden-textbox").animate({ left: "-25%" });
        $("#grid").animate({ left: "-25%" });
        $("#grid").css("opacity", "0.2");
    });

    $(".btn-primary").click(function () {
        $("#hidden-textbox").animate({ left: "0%" });
        $("#grid").animate({ left: "0%" });
        $("#grid").css("opacity", "1");
        $("#hidden-textbox").css("display", "none");
    });

    $(".emojicol").on('click', function (e) {
        // $('#').css('top', e.pageY);
    });
}

function convertEmojiToUnicode(str) {
    // If the string length is less than 4
    if (str.length < 4)
        return str.codePointAt(0).toString(16); // return the code point of the entire string
    // handles the 0x0000 cases I guess, for future emojis  
    return str.codePointAt(0).toString(16) + '-' + str.codePointAt(2).toString(16);
};
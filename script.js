var playStatus;


$(document).ready(function() {
    var icon = $('.play');
    icon.click(function() {
        icon.toggleClass('active');
        playStatus = false;
        return false;
    });
});

function beginSpeedRead() {

	playStatus = !playStatus;

    var sampleText = "Squidward: [enters his bedroom in nightgown, with book, and cup of tea] Ahh, finally, the weekend is here. And this isn't just any old weekend. [gestures to Dance Quarterly calendar on wall] This is the weekend that SpongeBob and Patrick go camping. Wouldn't it be great if they got lost in the woods and never came back? [thought bubble appears over Squidward] Squidward: Ho-ho, that would be great! [jumps into bed] You've waited a long time for this! A soft bed, warm tea, a good book, and two whole days with no... [laughs just like SpongeBob and imitates his goofy, big-eyed face] [hears SpongeBob's real laugh outside] What the...? [goes outside to find SpongeBob and Patrick in a tent, complete with sleeping bags and books, the two are laughing] SpongeBob! Aren't you two supposed to be camping?";

    var words = sampleText.split(" ");
    console.log($("#wpm option:selected").text());
    var pauseTime = getWaitTime($("#wpm option:selected").text());
    var i = 0;
    var end = words.length;


	if (playStatus){
		myloop();
	} else {
        document.getElementById('text recycler').innerHTML = "stop";
	}


    function myloop() {
        setTimeout(function() {
            if (i < end) {
                document.getElementById('text recycler').innerHTML = words[i];
                myloop();
            }
            i++;		
        }, pauseTime);
    }
}

function getWaitTime(wpm) {
	pauseTime = 60000/wpm;
	return pauseTime;
}

function getPlayPauseStatus() {
}


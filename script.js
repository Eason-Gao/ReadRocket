$(document).ready(function() {
    var icon = $('.play');
    icon.click(function() {
        icon.toggleClass('active');
        return false;
    });
});

function beginSpeedRead() {

    var sampleText = "Hey betch how's your day going";

    var words = sampleText.split(" ");

    var i = 0;
    var end = words.length;

	myloop();

    function myloop() {
        setTimeout(function() {
            if (i < end) {
                document.getElementById('text recycler').innerHTML = words[i];
                console.log(words[i])
                myloop();
            }
            i++;		
        }, 500);
    }
}
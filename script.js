alert("this is working!")var playStatus;var playCompleted = true;var i = 0;var resume = 0;var sampleText;$(document).ready(function() {    var icon = $('.play');    icon.click(function() {        icon.toggleClass('active');        // playStatus = false;        return false;    });});function beginSpeedRead() {    playStatus = !playStatus;    var words = sampleText.split(" ");    console.log($("#wpm option:selected").text());    var end = words.length;    playWords(words);    console.log("i = 0")}function getWaitTime(wpm) {    pauseTime = 60000 / wpm;    return pauseTime;}function getPlayPauseStatus() {}function playWords(words) {    console.log(" resume = " + resume + " and length is " + words.length);    if (resume < words.length - 1) {        i = resume;    }    var pauseTime = getWaitTime($("#wpm option:selected").text());    if (playStatus == false) { pauseTime = 100000000; }    console.log(playStatus);    console.log("pausetime = " + pauseTime);    setTimeout(function() {        if (i < words.length) {            console.log("i = " + i);            playCompleted = false;            document.getElementById('text recycler').innerHTML = words[i];            playWords(words);        }        i++;        resume = i;        console.log("resume = " + resume);    }, pauseTime);}function getSelectionText() {    var text = "";    if (window.getSelection) {        text = window.getSelection().toString();    } else if (document.selection && document.selection.type != "Control") {        text = document.selection.createRange().text;    }    return text;}document.onmouseup = document.onkeyup = document.onselectionchange = function() {    sampleText = getSelectionText();    resume = 0;    console.log(sampleText);};chrome.commands.onCommand.addListener(function(Read) {console.log("Command = read");});
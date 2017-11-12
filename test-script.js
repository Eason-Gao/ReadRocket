document.onmouseup = document.onkeyup = document.onselectionchange = function() {
    var sampleText = getSelectionText();
    console.log(sampleText);
    overLay();
};

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

function overLay() {
    var keypad1 = document.createElement("div");
   	$('body').load('index.html');
}
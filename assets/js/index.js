//back to top button
//define variables
// calculate the window height
// add event listeners

var button = document.getElementById('back-to-top'),
    body   = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos,
    docHeight;

//
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4;
}

window.addEventListener('scroll', function (event){
    scrollPos = body.scrollTop || docElem.scrollTop;
    button.className = (scrollPos > offset)  ? 'visible' : '';
});
var cssbtn = document.getElementById('cssbtn');
var jsbbtn = document.getElementById('jsbbtn');
var jsibtn = document.getElementById('jsibtn');
var sqlbbtn = document.getElementById('sqlbbtn');
var sqlibtn = document.getElementById('sqlibtn');
var sqlabtn = document.getElementById('sqlabtn');
var javabbtn = document.getElementById('javabbtn');
var pythonbbtn = document.getElementById('pythonbbtn');
var cpbtn = document.getElementById('pythonbbtn');
var pybtn = document.getElementById('pythonbbtn');
var wdbtn = document.getElementById('pythonbbtn');
// function for Viewing Certificates
function viewcertificates(link) {
    window.open(link, '_blank');
}

// Add click event listeners to each button
cssbtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/a507844c00c0');
});
jsbbtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/d0c33d38bc00');
});
jsibtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/ec256c8e9a9e');
});
sqlbbtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/715806def35f')

});
sqlibtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/b1e63ec08283');
});
sqlabtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/9ee89cfe05f5');
});
javabbtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/127d4fafa9c6');
});
pythonbbtn.addEventListener('click', function () {
    viewcertificates('https://www.hackerrank.com/certificates/6d8b544b94c8');
});
// ClipboardItem.addEventListener('click', function (){
//     viewcertificates('Image/C Language Certificate.pdf')
// })
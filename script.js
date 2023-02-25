var b_width = document.getElementById('b-width');
var b_height = document.getElementById('b-height');

b_width.innerHTML = window.innerWidth;
b_height.innerHTML = window.innerHeight;

window.addEventListener('resize', function(){
    b_width.innerHTML = window.innerWidth;
    b_height.innerHTML = window.innerHeight;
})

function disapper_div_func(){
    copied_text_div.style.display = 'none';
}

var copy_div = document.getElementById('copy-div');
var copied_text_div = document.getElementById('copied-text-div');
copy_div.addEventListener('click', function(){
    navigator.clipboard.writeText(`${window.innerWidth} x ${window.innerHeight}`);
    copied_text_div.style.display = 'flex';
    var disapper_div = setTimeout(disapper_div_func, 1000);
    clearTimeout(disapper_div_func);
});
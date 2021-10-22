var checkbox = document.getElementById('slider');

checkbox.onclick = function () {
    transition();
    if (this.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }
}

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function() {
        document.documentElement.classList.remove('transition');
    }, 250)
}
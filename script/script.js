//Use this if the page charge for at least 1sec before everything get loaded
//document.onreadystatechange = () => {
//    const target = document.getElementsByClassName("loading")[0]
//
//    target.style.opacity = '0'
//    target.style.zIndex = '0'
//    target.addEventListener('transitionend', () => target.remove());
//}


//Use this if you want to show the loading screen if the page load really quickly
setTimeout(function () {
    const target = document.getElementsByClassName("loading")[0]

                   target.style.opacity = '0'
                   target.style.zIndex = '0'
                   target.addEventListener('transitionend', () => target.remove());
}, 1000);



var previous_pos = window.pageYOffset;
window.onscroll = function() {
    var current_pos = window.pageYOffset;
    if (previous_pos > current_pos) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "-150px";
    }
    previous_pos = current_pos;
}


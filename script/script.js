//document.onreadystatechange = () => {
//    const target = document.getElementsByClassName("loading")[0]
//
//    target.style.opacity = '0'
//    target.style.zIndex = '0'
//    target.addEventListener('transitionend', () => target.remove());
//}

setTimeout(function () {
    const target = document.getElementsByClassName("loading")[0]

    target.style.opacity = '0'
    target.style.zIndex = '0'
    target.addEventListener('transitionend', () => target.remove());
}, 1000);


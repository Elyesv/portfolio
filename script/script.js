document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        let target = document.getElementsByClassName("loading")[0]
        let fadeEffect = setInterval(function () {
            if (!target.style.opacity) {
                target.style.opacity = 1;
            }
            if (target.style.opacity > 0) {
                target.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 10);
    }
};







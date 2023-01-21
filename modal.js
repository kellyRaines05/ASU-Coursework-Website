function openModal(num) {
    let modalList = document.getElementsByClassName("modal");
    if (num < modalList.length) {
        modalList[num].style.display = "block";
    }
}

function closeModal(num) {
    let modalList = document.getElementsByClassName("modal");
    if (num < modalList.length) {
        modalList[num].style.display = "none";
    }
}

window.onclick = function(event) {
    let modalList = document.getElementsByClassName("modal");
    for (var i = 0; i < modalList.length; i++) {
        if (event.target == modalList[i]) {
            modalList[i].style.display = "none";
        }
    }
}
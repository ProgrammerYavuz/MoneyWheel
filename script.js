let cark = document.querySelector('.cark');
let cevirBtn = document.querySelector('.cevirBtn');
let value = Math.ceil(Math.random() * 3600);

cevirBtn.onclick = function () {
    cark.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random() * 3600);
}
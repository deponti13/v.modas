const imgs = document.querySelector(".container");
const img = document.querySelectorAll(".container img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    const imgWidth = img[0].clientWidth;
    imgs.style.transform = 'translateX(' + (-idx * imgWidth) + 'px)';
}

function comprar() {
    alert("Produto adicionado ao carrinho!");
}

setInterval(carrossel, 1500);
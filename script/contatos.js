const ratingEl = document.querySelector('.star-rating');
let count = 1;
document.getElementById("radio1").checked = true;
let btn = document.getElementById('btn-form')
let avaliacao = 0

setInterval(function () {
    nextImage();
}, 1500)

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

btn.onclick = function () {
    let nome = document.getElementById('inputName').value
    let email = document.getElementById('inputEmail').value
    let nota = avaliacao

    alert(`Sua avaliação ajuda a melhorar nossos serviços, obrigado!
    \nSua avaliação: \nNome: ${nome.toUpperCase()}\nEmail: ${email}\nNota: ${nota}`)
}


// configuracao das estrelas

ratingEl.addEventListener('click', (event) => {
    const selectedStar = event.target.closest('li');
    const rating = selectedStar.dataset.value;
    avaliacao = rating

    updateStarRating(rating);
});

function updateStarRating(rating) {
    const imgs = ratingEl.querySelectorAll('img')

    for (let i = 0; i < stars.length; i++) {
        const img = imgs[i]
        img.src = "./icon/ic_star_full-32.png"
        if (i >= rating){
            img.src = "./icon/ic_star-32.png"
        }
    }
}
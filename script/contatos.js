let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage();
}, 1500)

function nextImage() {
    count++;
    if(count > 5) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

let btn = document.getElementById('btn-form')

btn.onclick = function() {
    let nome = document.getElementById('inputName').value
    let email = document.getElementById('inputEmail').value
    let nota =  document.querySelector("input[name='avaliacao']:checked").value


    alert(`Sua avaliação ajuda a melhorar nossos serviços, obrigado!
    \nSua avaliação: \nNome: ${nome}\nEmail: ${email}\nNota: ${nota}`)
}

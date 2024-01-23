const inputArea = document.querySelector('input');
const btnCriptografar = document.querySelector('.btn__criptografar');
const btnDescriptografar = document.querySelector('.btn__descriptografar');
const outputArea = document.querySelector('#output-area');
const outputAreaVazio = document.querySelector('#output-area-vazio');
const btnCopiar = document.querySelector('.btn__copiar');
const outPutAreaSpan = document.querySelector('#output-area-span p');

const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
        .map((l, i) => {
            const c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
                return String.fromCharCode(((c - 65 + n) % 26) + 65);
            if (c >= 97 && c <= 122)
                return String.fromCharCode(((c - 97 + n) % 26) + 97);
            return l;
        })
        .join('');
};

function esconderOutputAreaVazio() {
    outputAreaVazio.style.display = 'none';
}
function mostrarOutputAreaVazio() {
    outputAreaVazio.style.display = 'block';
}

function esconderOutputArea() {
    outputArea.style.display = 'none';
}
function mostrarOutputArea() {
    outputArea.style.display = 'block';
}

function criptografar() {
    const texto = inputArea.value;
    const textoCriptografado = caesarCipher(texto, 2, false);
    inputArea.value = '';
    esconderOutputAreaVazio();
    mostrarOutputArea();
    outPutAreaSpan.innerHTML = textoCriptografado;
}

function descriptografar() {
    const texto = inputArea.value;
    const textoDescriptografado = caesarCipher(texto, 2, true);
    inputArea.value = '';
    esconderOutputAreaVazio();
    mostrarOutputArea();
    outPutAreaSpan.innerHTML = textoDescriptografado;
}

function copiar() {
    const textoCopiado = document.querySelector('#output-area-span');
    navigator.clipboard.writeText(textoCopiado.innerText);
}
const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
})

const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
        width: 250,
        height: 250,
    },
    fps: 20,
});

scanner.render(succes, error);

function succes(result) {
    document.getElementById('result').innerHTML = `
    <h2>Success!</h2>
    <p><a href="${result}">${result}</a></p>
    `;

    scanner.clear();
    document.getElementById('reader').remove();
}

function error(err) {
    console.error(err);
}
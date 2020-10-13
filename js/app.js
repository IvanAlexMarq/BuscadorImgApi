const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if (terminoBusqueda === '') {
        mostrarAlerta('Agrea un término de busqueda');
        return;
    }

    //consutar a la api
    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {

    const existeAlerta = document.querySelector('.bg-red-100');
    //para evitar duplicados al presionar varias veces
    if (!existeAlerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

}

function buscarImagenes(termino) {
    const key = '18682550-0c4675b78cad8c2aaee35d10c';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarImagenes(resultado.hits);
        })
}

function mostrarImagenes(imagenes) {
    console.log(imagenes);
}
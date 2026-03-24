const icones = ['🐍', '🐍', '☕', '☕', '⚛️', '⚛️', '🚀', '🚀', '👾', '👾', '🔥', '🔥'];

let primeiraCarta = null;
let segundaCarta = null;
let travaTabuleiro = false;
let pontos = 0;
let tempo = 0;
let intervalo = null; // Variável padrão para o tempo

const tabuleiro = document.getElementById('tabuleiro');

function inicializarTabuleiro() {
    tabuleiro.innerHTML = '';
    pontos = 0;
    tempo = 0;
    document.getElementById('pontos').innerText = pontos;
    document.getElementById('tempo').innerText = tempo;

    icones.sort(() => Math.random() - 0.5);

    icones.forEach(icone => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.icone = icone;

        carta.innerHTML = `
            <div class="face-frente">${icone}</div>
            <div class="face-verso">?</div>
        `;

        carta.addEventListener('click', manipularClique);
        tabuleiro.appendChild(carta);
    });

    iniciarCronometro();
}

function manipularClique() {
    if (travaTabuleiro) return;
    if (this === primeiraCarta) return;

    this.classList.add('virada');

    if (!primeiraCarta) {
        primeiraCarta = this;
        return;
    }
    segundaCarta = this;
    verificarPar();
}

function verificarPar() {
    const saoIguais = primeiraCarta.dataset.icone === segundaCarta.dataset.icone;

    if(saoIguais) {
        processarParAcerto();
    } else {
        processarParErro();
    }
}

function processarParAcerto() {
    pontos += 10;
    document.getElementById('pontos').innerText = pontos;

    primeiraCarta.removeEventListener('click', manipularClique);
    segundaCarta.removeEventListener('click', manipularClique);

    resetarCartas();
    checarVitoria();
}

function processarParErro() {
    travaTabuleiro = true; 
    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        resetarCartas();
    } , 1000);
}

function resetarCartas() {
    primeiraCarta = null;
    segundaCarta = null;
    travaTabuleiro = false;
}

function iniciarCronometro() {
    
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        tempo++;
        document.getElementById('tempo').innerText = tempo;
    }, 1000);
}

function checarVitoria() {
    const cartasViradas = document.querySelectorAll('.carta.virada').length;
    if (cartasViradas === icones.length) {
        clearInterval(intervalo);
        setTimeout(() => {
            alert(`Parabéns! Você venceu em ${tempo} segundos com ${pontos} pontos!`);
        }, 500);
    }
}


document.getElementById('reiniciar').addEventListener('click', inicializarTabuleiro);


inicializarTabuleiro();
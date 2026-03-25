import { GameState, pontosElement } from './constants.js';
import { checarVitoria } from './game.js';

/**
 * Manipula o clique em uma carta
 */
export function manipularClique() {
    if (GameState.travaTabuleiro) return;
    if (this === GameState.primeiraCarta) return;

    this.classList.add('virada');

    if (!GameState.primeiraCarta) {
        GameState.primeiraCarta = this;
        return;
    }
    GameState.segundaCarta = this;
    verificarPar();
}

/**
 * Verifica se as duas cartas viradas formam um par
 */
function verificarPar() {
    const saoIguais = GameState.primeiraCarta.dataset.icone === GameState.segundaCarta.dataset.icone;

    if (saoIguais) {
        processarParAcerto();
    } else {
        processarParErro();
    }
}

/**
 * Processa quando um par é acertado
 */
function processarParAcerto() {
    GameState.pontos += 10;
    pontosElement.innerText = GameState.pontos;

    GameState.primeiraCarta.removeEventListener('click', manipularClique);
    GameState.segundaCarta.removeEventListener('click', manipularClique);

    resetarCartas();
    checarVitoria();
}

/**
 * Processa quando um par é errado
 */
function processarParErro() {
    GameState.travaTabuleiro = true;
    setTimeout(() => {
        GameState.primeiraCarta.classList.remove('virada');
        GameState.segundaCarta.classList.remove('virada');
        resetarCartas();
    }, 1000);
}

/**
 * Reseta as cartas para o estado inicial
 */
function resetarCartas() {
    GameState.primeiraCarta = null;
    GameState.segundaCarta = null;
    GameState.travaTabuleiro = false;
}

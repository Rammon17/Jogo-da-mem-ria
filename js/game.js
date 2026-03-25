import { icones, GameState, tabuleiro, pontosElement, tempoElement } from './constants.js';
import { manipularClique } from './card.js';
import { iniciarCronometro, pararCronometro, resetarTempo } from './timer.js';

/**
 * Inicializa o tabuleiro com um novo jogo
 */
export function inicializarTabuleiro() {
    tabuleiro.innerHTML = '';
    
    // Reseta o estado do jogo
    GameState.primeiraCarta = null;
    GameState.segundaCarta = null;
    GameState.travaTabuleiro = false;
    GameState.pontos = 0;
    
    // Reseta a exibição
    pontosElement.innerText = GameState.pontos;
    pararCronometro();
    resetarTempo();

    // Embaralha os ícones
    [...icones].sort(() => Math.random() - 0.5).forEach(icone => {
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

/**
 * Verifica se o jogador venceu
 */
export function checarVitoria() {
    const cartasViradas = document.querySelectorAll('.carta.virada').length;
    
    if (cartasViradas === icones.length) {
        pararCronometro();
        setTimeout(() => {
            alert(`Parabéns! Você venceu em ${GameState.tempo} segundos com ${GameState.pontos} pontos!`);
        }, 500);
    }
}

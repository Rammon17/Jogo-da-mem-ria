import { GameState, tempoElement } from './constants.js';

/**
 * Inicia o cronômetro do jogo
 */
export function iniciarCronometro() {
    if (GameState.intervalo) clearInterval(GameState.intervalo);

    GameState.intervalo = setInterval(() => {
        GameState.tempo++;
        tempoElement.innerText = GameState.tempo;
    }, 1000);
}

/**
 * Para o cronômetro
 */
export function pararCronometro() {
    if (GameState.intervalo) {
        clearInterval(GameState.intervalo);
        GameState.intervalo = null;
    }
}

/**
 * Reseta o tempo para zero
 */
export function resetarTempo() {
    GameState.tempo = 0;
    tempoElement.innerText = GameState.tempo;
}

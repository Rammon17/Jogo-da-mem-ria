import { inicializarTabuleiro, checarVitoria } from './game.js';
import { btnReiniciar } from './constants.js';

// Event listeners
btnReiniciar.addEventListener('click', inicializarTabuleiro);

// Inicia o jogo
inicializarTabuleiro();

// Exporta a função de vitória para ser usada em card.js
export { checarVitoria };

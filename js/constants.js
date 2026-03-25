// Ícones do jogo
export const icones = ['🐍', '🐍', '☕', '☕', '⚛️', '⚛️', '🚀', '🚀', '👾', '👾', '🔥', '🔥'];

// Estado do jogo
export const GameState = {
    primeiraCarta: null,
    segundaCarta: null,
    travaTabuleiro: false,
    pontos: 0,
    tempo: 0,
    intervalo: null
};

// Elementos do DOM
export const tabuleiro = document.getElementById('tabuleiro');
export const pontosElement = document.getElementById('pontos');
export const tempoElement = document.getElementById('tempo');
export const btnReiniciar = document.getElementById('reiniciar');

import * as elements from './elements.js';
import * as actions from './actions.js';
import * as sounds from './sounds.js';

export function registerControls() {
  elements.controls.addEventListener('click', handleRegisterControls);
  elements.soundsButtons.addEventListener('click', handleSoundsButtons);
}

function handleRegisterControls(event) {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== 'function') {
        return;
    }

    actions[action]();
}

const isPlaying = (audio) => !audio.paused && !audio.ended && audio.currentTime > 0;

function handleSoundsButtons(event) {
    const target = event.target.closest('button');
    if (!target) return;

    // Defina a lógica para cada tipo de som
    const handleSound = (soundType) => {
        if (isPlaying(soundType)) {
            target.classList.remove('sound-on');
            soundType.pause();
            soundType.currentTime = 0; // Reinicie o áudio para o início
        } else {
            // Remova a classe .sound-on de todos os botões
            Array.from(elements.soundsButtons.children).forEach((btn) => btn.classList.remove('sound-on'));
            target.classList.add('sound-on');
            sounds.toggleSound(soundType);
        }
    }

    switch (target.classList[1]) {
        case 'ph-tree':
            handleSound(sounds.forest);
            break;
        case 'ph-cloud-rain':
            handleSound(sounds.rain);
            break;
        case 'ph-coffee':
            handleSound(sounds.coffee);  // Corrigido aqui, era "coffe" antes
            break;
        case 'ph-fire':
            handleSound(sounds.fireplace);
            break;
    }
}

export const coffee = new Audio('./assets/Cafeteria.wav')
export const rain = new Audio('./assets/Chuva.wav')
export const forest = new Audio('./assets/Floresta.wav')
export const fireplace = new Audio('./assets/Lareira.wav')

const sounds = [coffee, rain, forest, fireplace];

coffee.loop = true;
rain.loop = true;
forest.loop = true;
fireplace.loop = true;

function stopAllSounds() {
    sounds.forEach(sound => sound.pause());
    sounds.forEach(sound => sound.currentTime = 0);
}

export function toggleSound(sound) {
    if (sound.paused) {
        stopAllSounds();
        sound.play();
    } else {
        sound.pause();
    }
}

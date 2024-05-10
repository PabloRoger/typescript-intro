interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

/**
 * DESESTRUCTURACIÓN DE OBJETOS
 */

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Pablo Roger",
    year: 1997,
  },
};

const { audioVolume: volumen, songDuration: duracion } = audioPlayer;

const { author: autor, year: year } = audioPlayer.details;

console.log(`
DESESTRUCTURACIÓN DE OBJETOS
----------------------------
Volumen: ${volumen}
Duración: ${duracion}
Autor: ${autor}
Año: ${year}
`);


/**
 * DESESTRUCTURACIÓN DE ARRAYS
 */

const [, , trunk = 'Not found']: string[] = ['Goku','Vegeta']

console.log(`
DESESTRUCTURACIÓN DE ARRAY
----------------------------
Personaje: ${trunk}
`);


export {};

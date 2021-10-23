//class SoundSet {
//  constructor(v, u, d) {
//    this.value = v;
//    this.desc = d;
//  }
//}
const keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const SOUNDSETS = [
  [
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/74[kb]c1.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/45[kb]c4.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]Bg-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/32[kb]biggest-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/32[kb]breathy-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/38[kb]brightclap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]brightclap2.wav.mp3"
  ],
  [
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2374[kb]NylonChordA7-01.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2640[kb]NylonChordA7-02.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2309[kb]NylonChordAaug6.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2393[kb]NylonChordAmaj.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2281[kb]NylonChordAmin01.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2783[kb]NylonChordAmin02.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2065[kb]NylonChordAmin7.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/2263[kb]NylonChordCmaj01.wav.mp3",
    "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(MULTISAMPLED)/GUITAR/Nylon%20Guitar%20Chords/1754[kb]NylonChordCmaj02.wav.mp3"
  ]
];
const SOUNDDESCRIPTIONS = [
  [
    "clap1",
    "clap2",
    "clap3",
    "clap4",
    "clap5",
    "clap6",
    "clap7",
    "clap8",
    "clap9"
  ],
  [
    "guitar1",
    "guitar2",
    "guitar3",
    "guitar4",
    "guitar5",
    "guitar6",
    "guitar7",
    "guitar8",
    "guitar9"
  ]
];
const DISPLAYMODES = ["DRUMS", "GUITAR"];
export { SOUNDSETS, DISPLAYMODES, SOUNDDESCRIPTIONS, keyArr };

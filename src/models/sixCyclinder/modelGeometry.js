import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3((0.5), (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.25), (0.5), -(0.4330127018922193))
    },
    {
        letter: "C",
        position: new Vector3(-(0.25), (0.5), -(0.4330127018922193))
    },
    {
        letter: "D",
        position: new Vector3(-(0.5), (0.5), 0)
    },
    {
        letter: "E",
        position: new Vector3(-(0.25), (0.5), (0.4330127018922193))
    },
    {
        letter: "F",
        position: new Vector3((0.25), (0.5), (0.4330127018922193))
    },
    {
        letter: "H",
        position: new Vector3((0.5), -(0.5), 0)
    },
    {
        letter: "I",
        position: new Vector3((0.25), -(0.5), -(0.4330127018922193))
    },
    {
        letter: "J",
        position: new Vector3(-(0.25), -(0.5), -(0.4330127018922193))
    },
    {
        letter: "K",
        position: new Vector3(-(0.5), -(0.5), 0)
    },
    {
        letter: "L",
        position: new Vector3(-(0.25), -(0.5), (0.4330127018922193))
    },
    {
        letter: "G",
        position: new Vector3((0.25), -(0.5), (0.4330127018922193))
    }
]

export let faces = [
    [5, 11, 6, 0],  //AFJE
    [4, 10, 11, 5],  //DIJE
    [3, 9, 10, 4],  //CHID
    [2, 8, 9, 3],  //BGHC
    [1, 7, 8, 2],  //AFGB
    [0, 6, 7, 1],  //ABCDE
    [0, 1, 2, 3, 4, 5],   //JIHGF
    [11, 10, 9, 8, 7, 6]   //JIHGF
]
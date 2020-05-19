import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3(0, (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.5),-(0.5), 0)
    },
    {
        letter: "C",
        position: new Vector3(-(0.25), -(0.5),-(0.4330127018922193))
    },
    {
        letter: "D",
        position: new Vector3(-(0.25), -(0.5),(0.4330127018922193))
    },
]

export let faces = [
    [2, 1, 3],
    [0, 1, 2],  //ABC
    [0, 3, 1],  //ABD
    [0, 2, 3]   //ACD
]

/*
export let faces = [
    [2, 1, 4, 3],
    [0, 1, 2],  //ABC
    [0, 4, 1],  //ABE
    [0, 3, 4],  //ADE
    [0, 2, 3]   //ADC
]
 */
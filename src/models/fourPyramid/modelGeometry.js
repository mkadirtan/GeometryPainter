import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3(0, (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.5),-(0.5), (0.5))
    },
    {
        letter: "C",
        position: new Vector3(-(0.5),-(0.5), (0.5))
    },
    {
        letter: "D",
        position: new Vector3(-(0.5),-(0.5), -(0.5))
    },
    {
        letter: "E",
        position: new Vector3((0.5),-(0.5), -(0.5))
    }
]

export let faces = [
    [1, 2, 3, 4],
    [0, 2, 1],  //ABC
    [0, 1, 4],  //ABE
    [0, 4, 3],  //ADE
    [0, 3, 2]   //ADC
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
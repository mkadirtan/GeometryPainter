import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3((0.75), (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.75),-(0.25),-(0.4330127018922193))
    },
    {
        letter: "C",
        position: new Vector3((0.75),-(0.25),(0.4330127018922193))
    },
    {
        letter: "D",
        position: new Vector3(-(0.75), (0.5), 0)
    },
    {
        letter: "E",
        position: new Vector3(-(0.75),-(0.25),-(0.4330127018922193))
    },
    {
        letter: "F",
        position: new Vector3(-(0.75),-(0.25),(0.4330127018922193))
    },
]

export let faces = [
    [4, 3, 0, 1],
    [5, 4, 1, 2],
    [3, 5, 2, 0],
    [2, 1, 0],
    [3, 4, 5]
]
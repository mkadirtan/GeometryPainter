import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3((0.5) , (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3(0.15450849718747373,(0.5),-(0.47552825814757677))
    },
    {
        letter: "C",
        position: new Vector3(-(0.40450849718747367),(0.5), -(0.2938926261462366))
    },
    {
        letter: "D",
        position: new Vector3(-(0.4045084971874737), (0.5), (0.2938926261462365))
    },
    {
        letter: "E",
        position: new Vector3((0.15450849718747361), (0.5), (0.4755282581475768))
    },
    {
        letter: "F",
        position: new Vector3((0.5) , -(0.5), 0)
    },
    {
        letter: "G",
        position: new Vector3(0.15450849718747373,-(0.5),-(0.47552825814757677))
    },
    {
        letter: "H",
        position: new Vector3(-(0.40450849718747367),-(0.5), -(0.2938926261462366))
    },
    {
        letter: "I",
        position: new Vector3(-(0.4045084971874737), -(0.5), (0.2938926261462365))
    },
    {
        letter: "J",
        position: new Vector3((0.15450849718747361), -(0.5), (0.4755282581475768))
    }
]

export let faces = [
    [4, 9, 5, 0],  //AFJE
    [3, 8, 9, 4],  //DIJE
    [2, 7, 8, 3],  //CHID
    [1, 6, 7, 2],  //BGHC
    [0, 5, 6, 1],  //AFGB
    [0, 1, 2, 3, 4],  //ABCDE
    [9, 8, 7, 6, 5]   //JIHGF
]
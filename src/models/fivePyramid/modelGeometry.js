import {Vector3} from "@babylonjs/core";

export let vertex = [
    {
        letter: "A",
        position: new Vector3(0 , (0.5), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.5) , -(0.5), 0)
    },
    {
        letter: "C",
        position: new Vector3(0.15450849718747373,-(0.5),-(0.47552825814757677))
    },
    {
        letter: "D",
        position: new Vector3(-(0.40450849718747367),-(0.5), -(0.2938926261462366))
    },
    {
        letter: "E",
        position: new Vector3(-(0.4045084971874737), -(0.5), (0.2938926261462365))
    },
    {
        letter: "F",
        position: new Vector3((0.15450849718747361), -(0.5), (0.4755282581475768))
    }
]

export let faces = [
    [2,1,5,4,3],
    [0, 1, 2],  //ABC
    [0, 5, 1],  //ABF
    [0, 4, 5],  //AEF
    [0, 3, 4],  //ADE
    [0, 2, 3]   //ABC
]
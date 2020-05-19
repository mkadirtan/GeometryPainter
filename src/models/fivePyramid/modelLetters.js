import { Vector3 } from "@babylonjs/core";
import modelConfig from "../models.config";

let { pad } = modelConfig;

export default [
    {
        letter: "A",
        position: new Vector3(0 , (0.5+pad), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.5+pad) , -(0.5+pad), 0)
    },
    {
        letter: "C",
        position: new Vector3(0.15450849718747373+pad,-(0.5+pad),-(0.47552825814757677+pad))
    },
    {
        letter: "D",
        position: new Vector3(-(0.40450849718747367+pad),-(0.5+pad), -(0.2938926261462366+pad))
    },
    {
        letter: "E",
        position: new Vector3(-(0.4045084971874737+pad), -(0.5+pad), (0.2938926261462365+pad))
    },
    {
        letter: "F",
        position: new Vector3((0.15450849718747361+pad), -(0.5+pad), (0.4755282581475768+pad))
    }
]
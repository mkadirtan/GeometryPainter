import { Vector3 } from "@babylonjs/core";
import modelConfig from "../models.config";

let { pad } = modelConfig;

export default [
    {
        letter: "A",
        position: new Vector3((0.5+pad),(0.5+pad),(0.5+pad))
    },
    {
        letter: "B",
        position: new Vector3(-(0.5+pad),(0.5+pad), (0.5+pad))
    },
    {
        letter: "C",
        position: new Vector3((0.5+pad),-(0.5+pad), (0.5+pad))
    },
    {
        letter: "D",
        position: new Vector3(-(0.5+pad),-(0.5+pad), (0.5+pad))
    },
    {
        letter: "E",
        position: new Vector3((0.5+pad),(0.5+pad),-(0.5+pad))
    },
    {
        letter: "F",
        position: new Vector3(-(0.5+pad),(0.5+pad), -(0.5+pad))
    },
    {
        letter: "G",
        position: new Vector3((0.5+pad),-(0.5+pad), -(0.5+pad))
    },
    {
        letter: "H",
        position: new Vector3(-(0.5+pad),-(0.5+pad), -(0.5+pad))
    },
]
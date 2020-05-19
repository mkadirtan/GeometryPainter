import { Vector3 } from "@babylonjs/core";
import modelConfig from "../models.config";

let { pad } = modelConfig;

export default [
    {
        letter: "A",
        position: new Vector3((0.3+pad),(0.5+pad),(0.6+pad))
    },
    {
        letter: "B",
        position: new Vector3(-(0.3+pad),(0.5+pad), (0.6+pad))
    },
    {
        letter: "C",
        position: new Vector3((0.3+pad),-(0.5+pad), (0.6+pad))
    },
    {
        letter: "D",
        position: new Vector3(-(0.3+pad),-(0.5+pad), (0.6+pad))
    },
    {
        letter: "E",
        position: new Vector3((0.3+pad),(0.5+pad),-(0.6+pad))
    },
    {
        letter: "F",
        position: new Vector3(-(0.3+pad),(0.5+pad), -(0.6+pad))
    },
    {
        letter: "G",
        position: new Vector3((0.3+pad),-(0.5+pad), -(0.6+pad))
    },
    {
        letter: "H",
        position: new Vector3(-(0.3+pad),-(0.5+pad), -(0.6+pad))
    },
]
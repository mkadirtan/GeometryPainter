import { Vector3 } from "@babylonjs/core";
import modelConfig from "../models.config";

let { pad } = modelConfig;

export default [
    {
        letter: "A",
        position: new Vector3(0,(0.5+pad),0)
    },
    {
        letter: "B",
        position: new Vector3(0, (0.5+pad), (0.5+pad))
    },
    {
        letter: "C",
        position: new Vector3(0,-(0.5+pad), 0)
    },
    {
        letter: "D",
        position: new Vector3(0, -(0.5+pad), (0.5+pad))
    }
]
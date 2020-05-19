import { Vector3 } from "@babylonjs/core";
import modelConfig from "../models.config";

let { pad } = modelConfig;

export default [
    {
        letter: "A",
        position: new Vector3(0, (0.5+pad), 0)
    },
    {
        letter: "B",
        position: new Vector3((0.5+pad),-(0.5+pad), 0)
    },
    {
        letter: "C",
        position: new Vector3(-(0.25+pad), -(0.5+pad), -(0.4330127018922193+pad))
    },
    {
        letter: "D",
        position: new Vector3(-(0.25+pad), -(0.5+pad),(0.4330127018922193+pad))
    },
]
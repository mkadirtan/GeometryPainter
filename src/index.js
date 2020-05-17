import {scene} from "./scene";
import "./utilities/gizmo";

import box from "./models/box";
import { createLetter, addLetters } from "./utilities/letter";
import {Vector3} from "@babylonjs/core";
import customButton from "./gui2D/customButton";

import { rightPanel } from "./gui2D/rightPanel";
import letterToggleImage from "../media/images/firefox.png"

const pad = 0.02

let letters = addLetters([
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
], box);

customButton({
    name: "letterToggle",
    image: letterToggleImage,
    onClick(){
        letters.forEach(letter=>{
            letter.getChildren().forEach(c=>c.isVisible = !c.isVisible)
        })
    },
    stack: rightPanel
})
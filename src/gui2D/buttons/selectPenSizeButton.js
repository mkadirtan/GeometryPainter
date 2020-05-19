import customButton from "./customButton";
import selectPenSizeImage from "../../../media/images/selectPenSizeImage.png"
import { rightPanel } from "../panels/rightPanel";
import { Observable } from "@babylonjs/core";
import { sizePalette } from "./sizePalette/sizePalette";
import {colorPalette} from "./colorPalette/colorPalette";

export let penSizeObservable = new Observable();

export function selectPenSizeButton(){
    return customButton({
        name: "selectPenSize",
        image: selectPenSizeImage,
        onClick(){
            colorPalette.toggle(false);
            sizePalette.toggle()
        },
        stack: rightPanel
    })
}
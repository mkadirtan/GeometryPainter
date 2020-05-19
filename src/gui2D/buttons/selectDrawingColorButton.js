import customButton from "./customButton";
import selectDrawingColorImage from "../../../media/images/selectDrawingColorImage.png"
import { rightPanel } from "../panels/rightPanel";
import { Observable } from "@babylonjs/core";
import colorPanels from "../panels/colorPanels";
import config from "../gui2D.config";
import {colorPalette} from "./colorPalette/colorPalette";
import {sizePalette} from "./sizePalette/sizePalette";

export let drawingColorObservable = new Observable();

export function selectDrawingColorButton(){
    return customButton({
        name: "selectDrawingColor",
        image: selectDrawingColorImage,
        onClick(){
            sizePalette.toggle(false);
            if(colorPanels[0].metadata.activeButton !== "selectDrawingColor"){
                colorPanels.forEach(colorPanel=>{
                    colorPanel.top = 5*config.controlBaseSize + "px";
                    colorPanel.metadata.activeButton = "selectDrawingColor";
                })
                colorPalette.toggle(true);
            } else {
                colorPalette.toggle();
            }
        },
        paddingBottom: 4,
        stack: rightPanel
    })
}
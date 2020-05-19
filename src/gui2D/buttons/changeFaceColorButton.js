import customButton from "./customButton";
import changeFaceColorImage from "../../../media/images/changeFaceColorImage.png";
import { rightPanel } from "../panels/rightPanel";
import { colorPalette } from "./colorPalette/colorPalette";
import colorPanels from "../panels/colorPanels";
import config from "../gui2D.config";
import {sizePalette} from "./sizePalette/sizePalette";

export function changeFaceColorButton(){
    return customButton({
        name: "changeFaceColor",
        image: changeFaceColorImage,
        onClick(){
            sizePalette.toggle(false);
            if(colorPanels[0].metadata.activeButton !== "changeFaceColor"){
                colorPanels.forEach(colorPanel=>{
                    colorPanel.top = 2*config.controlBaseSize + "px";
                    colorPanel.metadata.activeButton = "changeFaceColor";
                })
                colorPalette.toggle(true);
            } else {
                colorPalette.toggle();
            }
        },
        stack: rightPanel
    })
}
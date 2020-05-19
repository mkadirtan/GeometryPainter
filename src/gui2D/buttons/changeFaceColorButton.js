import customButton from "./customButton";
import changeFaceColorImage from "../../../media/images/changeFaceColorImage.png";
import { rightPanel } from "../panels/rightPanel";
import { colorPalette } from "./colorPalette/colorPalette";

export function changeFaceColorButton(){
    return customButton({
        name: "changeFaceColor",
        image: changeFaceColorImage,
        onClick(){
            colorPalette.toggle();
        },
        stack: rightPanel
    })
}
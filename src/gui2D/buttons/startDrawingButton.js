import customButton from "./customButton";
import startDrawingImage from "../../../media/images/startDrawingImage.png"
import { rightPanel } from "../panels/rightPanel";
import { startDrawing } from "../../utilities/canvas";
import {colorPalette} from "./colorPalette/colorPalette";

export function startDrawingButton(){
    return customButton({
        name: "startDrawing",
        image: startDrawingImage,
        onClick(){
            colorPalette.toggle(false);
            startDrawing()
        },
        paddingTop: 4,
        stack: rightPanel,
    })
}
import customButton from "./customButton";
import endDrawingImage from "../../../media/images/endDrawingImage.png"
import { rightPanel } from "../panels/rightPanel";
import { endDrawing } from "../../utilities/canvas";

export function endDrawingButton(){
    return customButton({
        name: "endDrawing",
        image: endDrawingImage,
        onClick(){
            endDrawing()
        },
        paddingBottom: 4,
        stack: rightPanel
    })
}
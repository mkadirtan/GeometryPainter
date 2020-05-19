import customButton from "./customButton";
import bottomWebPage from "../../../media/images/bottomWebPage.png"
import { advancedTexture } from "../../advancedTexture";
import {Control} from "@babylonjs/gui";

//import { rightPanel } from "../panels/rightPanel";

export function bottomWebPageButton(){
    let _button = customButton({
        name: "bottomWebPage",
        image: bottomWebPage,
        onClick(){

        },
        paddingBottom: 6,
        width: 2.5,
        height: 0.9,
        stack: advancedTexture,
        horizontalAlignment: Control.HORIZONTAL_ALIGNMENT_RIGHT,
        verticalAlignment: Control.VERTICAL_ALIGNMENT_BOTTOM
    });
    _button.isEnabled = false;
    return _button;
}
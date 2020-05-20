import customButton from "./customButton";
import bottomWebPage from "../../../media/images/bottomWebPage.png"
import { advancedTexture } from "../../advancedTexture";
import {Control} from "@babylonjs/gui";
import config from "../gui2D.config";
//import { rightPanel } from "../panels/rightPanel";

export function bottomWebPageButton(){
    let _button = customButton({
        name: "bottomWebPage",
        image: bottomWebPage,
        onClick(){

        },
        width: 2.75,
        height: 0.39,
        stack: advancedTexture,
        horizontalAlignment: Control.HORIZONTAL_ALIGNMENT_RIGHT,
        verticalAlignment: Control.VERTICAL_ALIGNMENT_BOTTOM
    });
    _button.isEnabled = false;
    return _button;
}
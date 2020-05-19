import customButton from "./customButton";
import topRightLogo from "../../../media/images/topRightLogo.png"
import placeholderImage from "../../../media/images/placeholderImage.png"
import {advancedTexture} from "../../advancedTexture";
import {Control} from "@babylonjs/gui";
import {rightPanel} from "../panels/rightPanel";

export function topRightLogoButton(){
    let _button = customButton({
        name: "topRightLogo",
        image: topRightLogo,
        onClick(){

        },
        paddingTop: 6,
        width: 2.5,
        height: 0.9,
        stack: advancedTexture,
        horizontalAlignment: Control.HORIZONTAL_ALIGNMENT_RIGHT,
        verticalAlignment: Control.VERTICAL_ALIGNMENT_TOP
    });
    _button.isEnabled = false;

    let _placeholder = customButton({
        name: "placeHolder",
        image: placeholderImage,
        onClick(){},
        paddingBottom: 6,
        stack: rightPanel
    })
    _placeholder.isEnabled = false;

    return _button;
}
import { Button, Control } from '@babylonjs/gui';
import config from '../../gui2D.config';
import { activeModelObservable } from "../../../utilities/activeModel";

export default function(param){
    let result = new Button.CreateImageOnlyButton(param.name, param.image);

    result.width = (param.width ? param.width * config.controlBaseSize : config.controlBaseSize) + "px";
    result.height = (param.height ? param.height * config.controlBaseSize : config.controlBaseSize) + "px";
    result.cornerRadius = 7;
    result.paddingBottom = config.controlPadding + "px";
    result.paddingTop = config.controlPadding + "px";
    result.paddingLeft = config.controlPadding + "px";
    result.paddingRight = config.controlPadding + "px";

    result.metadata = { status: false }
    if(param.activeImage) {
        result.onPointerClickObservable.add(()=>{
            if(result.metadata.status === false){
                result.metadata.status = true;
                result.children[0].source = param.activeImage
            } else {
                result.metadata.status = false;
                result.children[0].source = param.image
            }
        })
    }

    if(param.onClick) result.onPointerClickObservable.add(param.onClick);
    if(param.stack.name === "leftPanel"){
        result.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    } else if(param.stack.name === "rightPanel") {
        result.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    }

    param.stack.addControl(result);
    return result;
}
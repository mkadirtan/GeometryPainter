import { Button, Control } from '@babylonjs/gui';
import config from './gui2D.config';

export default function(param){
    let result = new Button.CreateImageOnlyButton(param.name, param.image);
    result.width = param.width || config.controlBaseSize + "px";
    result.height = param.height || config.controlBaseSize + "px";
    result.cornerRadius = 7;
    result.paddingBottom = config.controlPadding + "px";
    result.paddingTop = config.controlPadding + "px";
    result.paddingLeft = config.controlPadding + "px";
    result.paddingRight = config.controlPadding + "px";

    if(param.onClick)result.onPointerUpObservable.add(param.onClick);
    if(param.stack.name === "leftPanel"){
        result.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    } else if(param.stack.name === "rightPanel") {
        result.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    }

    param.stack.addControl(result);
    return result;
}
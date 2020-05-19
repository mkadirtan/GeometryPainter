import { Button, Control } from '@babylonjs/gui';
import config from '../../gui2D.config';
import { activeModelObservable } from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export default function(param){
    console.log(this);
    this.image = param.image;
    this.activeImage = param.activeImage;
    this.model = param.model;
    this.stack = param.stack
    this.button = new Button.CreateImageOnlyButton(param.name, param.image);
    this.button.width = config.controlWideSize + "px";
    this.button.height = config.controlBaseSize + "px";
    this.button.cornerRadius = 7;
    this.button.paddingBottom = config.controlPadding + "px";
    this.button.paddingTop = config.controlPadding + "px";
    this.button.paddingLeft = config.controlPadding + "px";
    this.button.paddingRight = config.controlPadding + "px";

    if(param.stack.name === "leftPanel"){
        this.button.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    } else if(param.stack.name === "rightPanel") {
        this.button.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    }

    this.stack.addControl(this.button);
    this.button.onPointerClickObservable.add(()=>{
        if(activeModel){
            activeModel.dispose();
        }
        this.model();
        setTimeout(()=>{this.button.children[0].source = this.activeImage},0)
    });

    activeModelObservable.add(()=>{
        this.button.children[0].source = this.image;
    })
}
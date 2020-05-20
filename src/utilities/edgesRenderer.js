import { edgesToggleObservable } from "../gui2D/buttons/edgesToggleButton";
import { activeModelObservable } from "./activeModel";
import {Color4} from "@babylonjs/core";

let activeModel = undefined;
activeModelObservable.add(e=>{
    activeModel = e;
    if(!activeModel) return;
    activeModel.edgesWidth = 2;
    activeModel.mesh.edgesColor = new Color4(0.14, 0.13, 0.13, 1)
});

edgesToggleObservable.add(e=>{
    if(!activeModel) return;
    if(e){
        activeModel.mesh.enableEdgesRendering(0.999)
        activeModel.mesh.visibility = 0.01;
    } else {
        activeModel.mesh.disableEdgesRendering()
        activeModel.mesh.visibility = 1;
    }
})
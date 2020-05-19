import { scene } from "../scene";
import { GizmoManager } from "@babylonjs/core";
import customButton from "../gui2D/buttons/customButton";
import gizmoToggleImage from "../../media/images/gizmoToggleImage.png"
import { leftPanel } from "../gui2D/panels/leftPanel";
import { activeModelObservable } from "./activeModel";

let gizmoManager = new GizmoManager(scene);
gizmoManager.scaleGizmoEnabled = true;

let activeModel = undefined;
activeModelObservable.add(e=>{
    activeModel=e;
    if(!activeModel) return;
    gizmoManager.attachableMeshes = [activeModel.mesh];
});

export function gizmoToggleButton(){
    return customButton({
        name: "gizmoToggle",
        stack: leftPanel,
        image: gizmoToggleImage,
        onClick(){
            console.log(gizmoManager);
            if(gizmoManager.scaleGizmoEnabled) {
                gizmoManager.scaleGizmoEnabled = false;
                gizmoManager.rotationGizmoEnabled = true;
            } else if (gizmoManager.rotationGizmoEnabled) {
                gizmoManager.rotationGizmoEnabled = false;
            } else {
                gizmoManager.scaleGizmoEnabled = true;
            }
        },
    })
}
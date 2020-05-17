import { scene } from "../scene";
import { GizmoManager } from "@babylonjs/core";
import customButton from "../gui2D/customButton";
import gizmoToggleImage from "../../media/images/gizmoToggleImage.png"
import { leftPanel } from "../gui2D/leftPanel";

let gizmoManager = new GizmoManager(scene);
gizmoManager.scaleGizmoEnabled = true;

export function attachGizmoToModel(model){
    if(!gizmoManager.attachableMeshes){
        gizmoManager.attachableMeshes = []
    }
    gizmoManager.attachableMeshes.push(model);
}

customButton({
    name: "gizmoToggle",
    stack: leftPanel,
    image: gizmoToggleImage,
    onClick(){
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
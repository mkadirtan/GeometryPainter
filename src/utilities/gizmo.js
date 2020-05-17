import { scene } from "../scene";
import { GizmoManager } from "@babylonjs/core";
import customButton from "../gui2D/customButton";
import gizmoToggleImage from "../../media/images/gizmoToggleImage.png"
import { leftPanel } from "../gui2D/leftPanel";

export let gizmoManager = new GizmoManager(scene);
gizmoManager.scaleGizmoEnabled = true;

/*scene.onNewMeshAddedObservable.add(m=>{
    if(!gizmoManager.attachableMeshes){
        gizmoManager.attachableMeshes = []
    }
    gizmoManager.attachableMeshes.push(m);
})*/

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
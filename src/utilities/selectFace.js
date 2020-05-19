import { scene } from "../scene";
import { Observable } from "@babylonjs/core";
import { activeModelObservable } from "./activeModel";

let selectedFace = undefined;
export let selectedFaceObservable = new Observable(o=>{
    selectedFaceObservable.notifyObserver(o, selectedFace)
});

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

scene.onPointerDown = (e, p) => {
    if(!p.pickedMesh) {
        if(!activeModel) return;
        activeModel.turnOffHighlight();
        selectedFaceObservable.notifyObservers(undefined);
    }
};

scene.onPointerPick = (e, p) => {
    if(activeModel === undefined) return;
    if(p.pickedMesh === activeModel.mesh){
        const detectedFace = activeModel.faceDetector(p.faceId);
        if(detectedFace < 0) return;
        selectedFaceObservable.notifyObservers(detectedFace);
        activeModel.highlightFace(detectedFace);
    }
}
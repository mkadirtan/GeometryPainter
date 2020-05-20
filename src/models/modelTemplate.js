import { Mesh, VertexBuffer } from "@babylonjs/core";

import modelConfig from "./models.config";
import { addLetters } from "../utilities/letter";
import { selectedFaceObservable} from "../utilities/selectFace";
// import { attachGizmoToModel } from "../utilities/gizmo"; //disabled Feature
import { activeModelObservable } from "../utilities/activeModel";
import { letterToggleObservable } from "../gui2D/buttons/letterToggleButton";
import { edgesToggleObservable } from "../gui2D/buttons/edgesToggleButton";

export default function() {
    this.defaultColor = modelConfig.defaultColor;
    this.highlightColor = modelConfig.highlightColor;
    this.defaultFaceColors = [];
    this.faceColors = [];
    this.letterPlanes = [];

    this.init = (numberOfFaceIds, modelLetters, modelFaces, builderFunction)=>{
        let defaultFaceColors = [];
        for(let i = 0; i<numberOfFaceIds; i++){
            defaultFaceColors.push(this.defaultColor)
        }
        this.defaultFaceColors = defaultFaceColors;
        this.faceColors = defaultFaceColors;

        this.newMeshWithFaceColors = builderFunction
        this.mesh = this.newMeshWithFaceColors(this.defaultFaceColors);
        this.mesh.sideOrientation = Mesh.DOUBLESIDE;
        this.letters = modelLetters;
        this.faces = modelFaces;
        activeModelObservable.notifyObservers(this);

        //prevent letter planes from disorientation
        scene.activeCamera.alpha = Math.PI/2
        scene.activeCamera.beta = Math.PI/2

        this.letterPlanes = addLetters(this);
        letterToggleObservable.add(e=>this.toggleLetters(e));
        letterToggleObservable.notifyObservers(false);
        edgesToggleObservable.notifyObservers(false);
        //attachGizmoToModel(model); //disabled Feature
    }

    this.toggleLetters = (status) => {
        this.letterPlanes.forEach(letterPlane=>{
            letterPlane.isVisible = status;
        })
    }

    this.faceDetector = (faceId) => {
        const detected = this.faces.find(face=>{
            return (face.idList.find(id=>faceId===id) >= 0)
        });
        if(detected === undefined) return -1;
        return detected.id
    }

    this.highlightFace = (faceId) => {
        let temporaryFaceColors = JSON.parse(JSON.stringify(this.faceColors));
        temporaryFaceColors[faceId] = this.highlightColor;
        let temporaryMesh = this.newMeshWithFaceColors(temporaryFaceColors)
        let newColors = temporaryMesh.getVerticesData(VertexBuffer.ColorKind, true, true);
        temporaryMesh.dispose();
        this.mesh.setVerticesData(VertexBuffer.ColorKind, newColors, true);
    }

    this.turnOffHighlight = () => {
        let temporaryMesh = this.newMeshWithFaceColors(this.faceColors)
        let newColors = temporaryMesh.getVerticesData(VertexBuffer.ColorKind, true, true);
        temporaryMesh.dispose();
        this.mesh.setVerticesData(VertexBuffer.ColorKind, newColors, true);
    }

    this.changeFaceColor = (faceId, newColor)=>{
        this.faceColors[faceId] = newColor;
        let temporaryMesh = this.newMeshWithFaceColors(this.faceColors)
        let newColors = temporaryMesh.getVerticesData(VertexBuffer.ColorKind, true, true);
        temporaryMesh.dispose();
        this.mesh.setVerticesData(VertexBuffer.ColorKind, newColors, true);
    }

    this.dispose = () => {
        this.mesh.dispose();
        activeModelObservable.notifyObservers(null);
        selectedFaceObservable.notifyObservers(null);
        letterToggleObservable.clear();
        edgesToggleObservable.notifyObservers(true);
    }
}
import { MeshButton3D } from "@babylonjs/gui";
import { Mesh, PlaneBuilder, TransformNode } from "@babylonjs/core";

import manager from "../gui3D/manager";
import drawText from "./drawText";
import { letterToggleObservable } from "../gui2D/letterToggleButton";

function changeLetter(letterPlane, newLetter){
    let texture = letterPlane.material.diffuseTexture;
    const size = texture.getSize()
    texture.getContext().clearRect(0,0,size.width, size.height);
    drawText(texture, newLetter);
    texture.update()
}

let rightPlane = PlaneBuilder.CreatePlane("rightPlane", {
    size: 0.2,
    sideOrientation: Mesh.DOUBLESIDE
}, scene);
rightPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;

let rightButton = new MeshButton3D(rightPlane, "leftButton");
manager.addControl(rightButton);

let leftPlane = PlaneBuilder.CreatePlane("leftPlane", {
    size: 0.2,
    sideOrientation: Mesh.DOUBLESIDE
}, scene);
leftPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;

let leftButton = new MeshButton3D(leftPlane, "leftButton");
manager.addControl(leftButton);

letterToggleObservable.add(e=>{
    rightButton.isVisible = !!e;
    leftButton.isVisible = !!e;
})
//Start deactivated;
deactivateLetterChangeButtons();

export function deactivateLetterChangeButtons(){
    rightButton.isVisible = false;
    rightButton.onPointerClickObservable.clear();

    leftButton.isVisible = false;
    leftButton.onPointerClickObservable.clear();

    scene.meshes.forEach(m=>{
        if(m.name === "letter"){
            m.metadata.active = false;
        }
    })
}

export function activateLetterChangeButtons(letterPlane){
    rightButton.isVisible = true;

    rightButton.position.y = 0.2;
    rightButton.linkToTransformNode(letterPlane.parent);

    rightButton.onPointerClickObservable.clear();
    rightButton.onPointerClickObservable.add(()=>{changeLetter(letterPlane, getNextLetter(letterPlane))})

    leftButton.isVisible = true;

    leftButton.position.y = -0.2;
    leftButton.linkToTransformNode(letterPlane.parent);

    leftButton.onPointerClickObservable.clear();
    leftButton.onPointerClickObservable.add(()=>{changeLetter(letterPlane, getPrevLetter(letterPlane))})

}

function getNextLetter(letterPlane){
    let letter = letterPlane.metadata.letter;
    let newLetter;
    if (letter === "Z") {
        newLetter = "A"
    } else {
        newLetter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    letterPlane.metadata.letter = newLetter;
    return newLetter;
}

function getPrevLetter(letterPlane){
    let letter = letterPlane.metadata.letter;
    let newLetter;
    if (letter === "A") {
        newLetter = "Z"
    } else {
        newLetter = String.fromCharCode(letter.charCodeAt(0) - 1);
    }
    letterPlane.metadata.letter = newLetter;
    return newLetter;
}
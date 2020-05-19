import { MeshButton3D } from "@babylonjs/gui";
import { Mesh, PlaneBuilder, TransformNode } from "@babylonjs/core";

import manager from "../gui3D/manager";
import drawText from "./drawText";
import { letterToggleObservable } from "../gui2D/buttons/letterToggleButton";

function changeLetter(letterPlane, newLetter){
    let texture = letterPlane.material.diffuseTexture;
    const size = texture.getSize()
    texture.getContext().clearRect(0,0,size.width, size.height);
    drawText(texture, newLetter);
    texture.update()
}

let rightButton = undefined;
let leftButton = undefined;

function getRightButton(){
    if(rightButton !== undefined) return rightButton;
    let rightPlane = PlaneBuilder.CreatePlane("rightPlane", {
        size: 0.2,
        sideOrientation: Mesh.DOUBLESIDE
    }, scene);
    rightPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;
    rightButton = new MeshButton3D(rightPlane, "leftButton");
    manager.addControl(rightButton);
    letterToggleObservable.add(e=>{
        rightButton.isVisible = !!e;
    })
    return rightButton
}

function getLeftButton(){
    if(leftButton !== undefined) return leftButton;
    let leftPlane = PlaneBuilder.CreatePlane("leftPlane", {
        size: 0.2,
        sideOrientation: Mesh.DOUBLESIDE
    }, scene);
    leftPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;
    leftButton = new MeshButton3D(leftPlane, "leftButton");
    manager.addControl(leftButton);
    letterToggleObservable.add(e=>{
        leftButton.isVisible = !!e;
    })
    return leftButton
}

//Start deactivated;
//deactivateLetterChangeButtons(); //disabled Feature

export function deactivateLetterChangeButtons(){
    rightButton = getRightButton();
    rightButton.isVisible = false;
    rightButton.onPointerClickObservable.clear();

    leftButton = getLeftButton();
    leftButton.isVisible = false;
    leftButton.onPointerClickObservable.clear();

    scene.meshes.forEach(m=>{
        if(m.name === "letterPlane"){
            m.metadata.active = false;
        }
    })
}

export function activateLetterChangeButtons(letterPlane){
    rightButton = getRightButton();
    rightButton.isVisible = true;
    rightButton.position.y = 0.2;

    rightButton.linkToTransformNode(letterPlane.parent);
    rightButton.onPointerClickObservable.clear();

    rightButton.onPointerClickObservable.add(()=>{changeLetter(letterPlane, getNextLetter(letterPlane))})

    leftButton = getLeftButton();
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
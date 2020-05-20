import {
    DynamicTexture,
    PlaneBuilder,
    StandardMaterial,
    TransformNode,
    Vector3,
    Mesh,
    ActionManager,
    ExecuteCodeAction,
} from "@babylonjs/core";

import { scene } from "../scene";
import {
    activateLetterChangeButtons,
    deactivateLetterChangeButtons,
} from "./changeLetter";
import drawText from "./drawText";
import { letterToggleObservable } from "../gui2D/buttons/letterToggleButton";


export function createLetter(letter){
    let letterPlane = PlaneBuilder.CreatePlane("letterPlane",{
        size: 0.2,
        sideOrientation: Mesh.DOUBLESIDE
    }, scene);

    letterPlane.metadata = {
        letter: letter,
        active: false
    }

    letterPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;

    let dynamicTexture = new DynamicTexture("letterTexture", 150, scene, true);//false, Texture.TRILINEAR_SAMPLINGMODE, Engine.TEXTUREFORMAT_RGBA);
    dynamicTexture.hasAlpha = true;
    drawText(dynamicTexture, letter);
    dynamicTexture.update()
    dynamicTexture.uAng = Math.PI;
    dynamicTexture.wAng = Math.PI;

    let letterMaterial = new StandardMaterial("letterMaterial", scene);
    letterMaterial.disableLighting = true;

    letterMaterial.diffuseTexture = dynamicTexture;
    letterPlane.material = letterMaterial;

    return letterPlane;
}

function attachLetterToTransformNode(letterPlane){
    let letterParent = new TransformNode("letterParent", scene);
    letterPlane.setParent(letterParent);
    return letterParent;
}

function attachChangeLetterPanel(letterPlane){
    letterPlane.actionManager = new ActionManager(scene);
    letterPlane.actionManager.registerAction(
        new ExecuteCodeAction({
            trigger: ActionManager.OnPickTrigger
        }, function(){
            if(letterPlane.metadata.active){
                letterPlane.metadata.active = false;
                deactivateLetterChangeButtons()
            } else {
                letterPlane.metadata.active = true;
                activateLetterChangeButtons(letterPlane)
            }
        })
    )
}

// letter { letter, position }
export function addLetters(model){
    let letterPlanes = [];
    model.letters.forEach(l=>{
        let letterPlane = createLetter(l.letter);
        letterPlanes.push(letterPlane);
        //attachChangeLetterPanel(letterPlane); //feature Disabled

        let letterParent = attachLetterToTransformNode(letterPlane)
        letterParent.position = l.position;
        letterParent.setParent(model.mesh);

        model.mesh.onAfterWorldMatrixUpdateObservable.add(m=>{
            const mean = (m.scaling.x + m.scaling.y + m.scaling.z)/3;//(Math.max(m.scaling.x, m.scaling.y, m.scaling.z) + Math.min(m.scaling.x, m.scaling.y, m.scaling.z))/2;
            letterParent.scaling = new Vector3(
                mean*(1/m.scaling.x), mean*(1/m.scaling.y), mean*(1/m.scaling.z)
            );
        })
    });
    return letterPlanes;
}
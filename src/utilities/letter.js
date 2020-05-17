import { scene } from "../scene";
import { DynamicTexture, PlaneBuilder, StandardMaterial, TransformNode, Vector3, Mesh } from "@babylonjs/core";

export function createLetter(letter){
    let letterPlane = PlaneBuilder.CreatePlane("letter",{
        size: 0.1,
        sideOrientation: Mesh.DOUBLESIDE
    }, scene);

    letterPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL;

    let dynamicTexture = new DynamicTexture("", 150, scene, true);//false, Texture.TRILINEAR_SAMPLINGMODE, Engine.TEXTUREFORMAT_RGBA);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(letter, 20, 130, "bold 150px Arial", "#000000", "transparent", true, true);
    dynamicTexture.uAng = Math.PI;
    dynamicTexture.wAng = Math.PI;

    let letterMaterial = new StandardMaterial("letter", scene);
    letterMaterial.disableLighting = true;

    letterMaterial.diffuseTexture = dynamicTexture;
    letterPlane.material = letterMaterial;

    let subParent = new TransformNode("parent", scene);
    letterPlane.setParent(subParent);

    return subParent;
}

// letter { letter, position }
export function addLetters(letters, mesh){
    let result = [];
    letters.forEach(l=>{
        let letter = createLetter(l.letter);
        letter.position = l.position;

        letter.setParent(mesh);

        mesh.onAfterWorldMatrixUpdateObservable.add(m=>{
            const mean = (m.scaling.x + m.scaling.y + m.scaling.z)/3;//(Math.max(m.scaling.x, m.scaling.y, m.scaling.z) + Math.min(m.scaling.x, m.scaling.y, m.scaling.z))/2;
            letter.scaling = new Vector3(
                //mean, mean, mean
                mean*(1/m.scaling.x), mean*(1/m.scaling.y), mean*(1/m.scaling.z)
            );
        })

        result.push(letter);
    });
    return result;
}
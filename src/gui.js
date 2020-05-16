import {scene} from './scene';
import {
    AdvancedDynamicTexture,
    GUI3DManager,
    Rectangle,
    TextBlock,
} from "@babylonjs/gui";
import {
    PlaneBuilder,
    StandardMaterial,
    TransformNode,
    Vector3,
} from "@babylonjs/core";
import {Control3D} from "@babylonjs/gui";
import {DynamicTexture} from "@babylonjs/core";


scene.onNewMeshAddedObservable.add(newMesh=>{
    switch(newMesh.name){
        case 'box':
            labelsBox(newMesh);
            break;
        case 'default':
            break;
    }
    window.newMesh = newMesh;
    //setInterval(()=>{newMesh.position.x +=0.4}, 1500)
})

const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true );
const GUI3D = new GUI3DManager(scene);

function labelsBox(mesh){
    let blackPlane = PlaneBuilder.CreatePlane("",{size: 0.1}, scene);
    //blackPlane.rotate(Vector3.Up(), 20)

    let myDynamicTexture = new DynamicTexture("", 150, scene, true);//false, Texture.TRILINEAR_SAMPLINGMODE, Engine.TEXTUREFORMAT_RGBA);
    myDynamicTexture.hasAlpha = true;

    let myMaterial = new StandardMaterial("", scene);
    myMaterial.backFaceCulling = false;
    myMaterial.diffuseTexture = myDynamicTexture;

    blackPlane.material = myMaterial;
    const delta = 0.02;
    blackPlane.position = new Vector3(0.25, 0.25, 0.25).addInPlaceFromFloats(delta, delta, delta)
    mesh.onAfterWorldMatrixUpdateObservable.add(m=>{
        const mean = (m.scaling.x + m.scaling.y + m.scaling.z)/3//(Math.max(m.scaling.x, m.scaling.y, m.scaling.z) + Math.min(m.scaling.x, m.scaling.y, m.scaling.z))/2;
        blackPlane.scaling = new Vector3(
            mean*(1/m.scaling.x), mean*(1/m.scaling.y), mean*(1/m.scaling.z)
        )
    })
    //mesh.onSizeChangedObservable.add(e=>console.log("Changed", e))
    blackPlane.setParent(mesh);
    blackPlane.billboardMode = TransformNode.BILLBOARDMODE_ALL

    let rect1 = new Control3D();
    rect1.position.x = mesh.position.x + 1;

    //mesh.position.y += 0.5;

    GUI3D.addControl(rect1)
    myDynamicTexture.drawText("A", 20, 130, "bold 150px Arial", "#000000", "transparent", true, true)//, x, y, font, color, canvas color, invertY, update);
}

function labelBox(mesh){
    let rect1 = new Rectangle();
    rect1.background = "black"
    rect1.height = "30px";
    rect1.alpha = 0.5;
    rect1.width = "30px";
    rect1.cornerRadius = 20;
    rect1.thickness = 1;

    let text1 = new TextBlock();
    text1.text = "A";
    text1.color = "white";

    rect1.addControl(text1);
    advancedTexture.addControl(rect1)

    //rect1.linkWithMesh(mesh);
    rect1.moveToVector3(new Vector3(0,0,0), scene)
    //rect1.linkOffsetX = 100;
    //rect1.linkOffsetY = 100;
}

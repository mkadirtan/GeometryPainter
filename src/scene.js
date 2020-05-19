import { Engine, Scene, ArcRotateCamera, DirectionalLight, Vector3, PointLight } from "@babylonjs/core";
import { Color3, Color4 } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");
export let engine;

if(canvas instanceof HTMLCanvasElement){
    engine = new Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true
    });
}

function createScene(){
    let scene = new Scene(engine);
    //scene.clearColor = new Color4(0.45,0.65,0.92, 1);
    scene.clearColor = new Color4(1,1,1,1);

    let camera = new ArcRotateCamera("camera", Math.PI/2, Math.PI/2, 6, Vector3.Zero(), scene);
    camera.wheelPrecision = 24;
    camera.speed = 1
    camera.angularSensibilityX = 2000;
    camera.angularSensibilityY = 2000;
    //camera.useNaturalPinchZoom = true //todo akıllı tahta için kontrol et.
    camera.attachControl(canvas, true);

    let diffuseColor = new Color3(1,0.98,0.97);
    let specularColor = new Color3(1,0.98,0.99);

    let directionalLight = new DirectionalLight("directionalLight", new Vector3(1,-1,1), scene);
    directionalLight.diffuse = diffuseColor
    directionalLight.specular = specularColor
    directionalLight.intensity = 0.4;

    let directionalLight2 = new DirectionalLight("directionalLight2", new Vector3(-1,1,-1), scene);
    directionalLight2.diffuse = diffuseColor
    directionalLight2.specular = specularColor
    directionalLight2.intensity = 0.4;

    let pointLight = new PointLight("pointLight", new Vector3(4,4,4), scene);
    pointLight.diffuse = diffuseColor
    pointLight.specular = specularColor
    pointLight.intensity = 0.3;

    let followerLight = new PointLight("followerLight", Vector3.Zero(), scene);
    followerLight.diffuse = diffuseColor
    followerLight.specular = new Color3(0.1, 0.1, 0.1)
    followerLight.intensity = 0.7;

    window.addEventListener("resize", function(){
        engine.resize();
    });

    return scene;
}

export let scene = createScene();
window.scene = scene;

let followerLight = scene.getLightByName("followerLight");
let camera = scene.activeCamera

scene.registerBeforeRender(()=>{
    followerLight.position = camera.position;
})

engine.runRenderLoop(function(){
    scene.render();
});
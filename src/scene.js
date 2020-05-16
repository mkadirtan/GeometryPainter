import { Engine, Scene, ArcRotateCamera, DirectionalLight, Vector3 } from "@babylonjs/core";
import { Color3, Color4 } from "@babylonjs/core";

const canvas = document.getElementById("renderCanvas");
const engine = new Engine(canvas, true, {stencil: true});

function createScene(){
    let scene = new Scene(engine);
    scene.clearColor = new Color4(0.75,0.75,0.75, 1);

    let camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    let directionalLight = new DirectionalLight("directionalLight", new Vector3(2,-3,8), scene);
    directionalLight.diffuse = new Color3(1,1,1);
    directionalLight.specular = new Color3(1,1,1);
    directionalLight.intensity = 1.2;

    let directionalLight2 = new DirectionalLight("directionalLight2", new Vector3(-2,-3,-8), scene);
    directionalLight2.diffuse = new Color3(1,1,1);
    directionalLight2.specular = new Color3(1,1,1);
    directionalLight2.intensity = 0.85;

    window.addEventListener("resize", function(){
        engine.resize();
    });

    return scene;
}

export let scene = createScene();

engine.runRenderLoop(function(){
    scene.render();
});
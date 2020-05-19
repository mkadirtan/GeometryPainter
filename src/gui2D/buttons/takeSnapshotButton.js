import { Tools } from "@babylonjs/core";
import customButton from "./customButton";
import takeSnapshotImage from "../../../media/images/letterToggleImage.png";
import { rightPanel } from "../panels/rightPanel";
import { scene, engine } from "../../scene";

export function takeSnapshotButton(){
    return customButton({
        name: "takeSnapshot",
        image: takeSnapshotImage,
        onClick(){
            Tools.CreateScreenshotAsync(engine, scene.activeCamera, 400)
                .then(img=>{
                    let n = document.createElement("IMG");
                    n.src = img;
                    document.body.appendChild(n);
                })
        },
        stack: rightPanel
    })
}
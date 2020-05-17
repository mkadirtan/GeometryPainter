import { Observable } from "@babylonjs/core";

import customButton from "./customButton";
import wireframeToggleImage from "../../media/images/firefox.png";
import { rightPanel } from "./rightPanel";

export let edgesToggleObservable = new Observable();
let isEdgesActive = false;

export function edgesToggleButton(){
    return customButton({
        name: "wireframeToggle",
        image: wireframeToggleImage,
        onClick(){
            isEdgesActive = !isEdgesActive;
            edgesToggleObservable.notifyObservers(isEdgesActive)
        },
        stack: rightPanel
    })
}
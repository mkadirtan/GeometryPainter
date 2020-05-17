import { Observable } from "@babylonjs/core";

import customButton from "./customButton";
import wireframeToggleImage from "../../media/images/firefox.png";
import { rightPanel } from "./rightPanel";

let isEdgesActive = false;
export let edgesToggleObservable = new Observable(o=>{
    edgesToggleObservable.notifyObserver(o, isEdgesActive)
});

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
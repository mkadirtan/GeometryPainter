import { Observable } from "@babylonjs/core";

import customButton from "./customButton";
import edgesToggleImage from "../../../media/images/edgesToggleImage.png";
import { rightPanel } from "../panels/rightPanel";

let isEdgesActive = false;
export let edgesToggleObservable = new Observable(o=>{
    edgesToggleObservable.notifyObserver(o, isEdgesActive)
});

export function edgesToggleButton(){
    return customButton({
        name: "edgesToggle",
        image: edgesToggleImage,
        onClick(){
            isEdgesActive = !isEdgesActive;
            console.log(isEdgesActive);
            edgesToggleObservable.notifyObservers(isEdgesActive)
        },
        stack: rightPanel
    })
}
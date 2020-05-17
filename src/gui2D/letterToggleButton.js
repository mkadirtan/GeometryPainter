import customButton from "./customButton";
import letterToggleImage from "../../media/images/firefox.png";
import { rightPanel } from "./rightPanel";
import { Observable } from "@babylonjs/core";

let isLettersActive = true;
export let letterToggleObservable = new Observable(o=>{
    letterToggleObservable.notifyObserver(o, isLettersActive)
});

export function letterToggleButton(){
    return customButton({
        name: "letterToggle",
        image: letterToggleImage,
        onClick(){
            isLettersActive = !isLettersActive;
            letterToggleObservable.notifyObservers(isLettersActive);
        },
        stack: rightPanel
    })
}
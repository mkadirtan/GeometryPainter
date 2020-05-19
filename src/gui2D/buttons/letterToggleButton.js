import customButton from "./customButton";
import letterToggleImage from "../../../media/images/letterToggleImage.png";
import { rightPanel } from "../panels/rightPanel";
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
        paddingBottom: 4,
        stack: rightPanel
    })
}
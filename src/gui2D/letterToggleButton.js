import customButton from "./customButton";
import letterToggleImage from "../../media/images/firefox.png";
import { rightPanel } from "./rightPanel";
import { Observable } from "@babylonjs/core";

export let letterToggleObservable = new Observable();
let isLettersActive = true;

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
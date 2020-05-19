import sixCyclinderButtonImage from "../../../../media/images/sixCyclinderButton.png";
import sixCyclinderButtonActiveImage from "../../../../media/images/sixCyclinderButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import sixCyclinder from "../../../models/sixCyclinder/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function sixCyclinderButton(){
    return new modelButton({
        name: "sixCyclinderButton",
        model: sixCyclinder,
        image: sixCyclinderButtonImage,
        activeImage: sixCyclinderButtonActiveImage,
        stack: leftPanel
    })
}
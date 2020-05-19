import fiveCyclinderButtonImage from "../../../../media/images/fiveCyclinderButton.png";
import fiveCyclinderButtonActiveImage from "../../../../media/images/fiveCyclinderButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import fiveCyclinder from "../../../models/fiveCyclinder/model"
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function fiveCyclinderButton(){
    return new modelButton({
        name: "fiveCyclinderButton",
        model: fiveCyclinder,
        image: fiveCyclinderButtonImage,
        activeImage: fiveCyclinderButtonActiveImage,
        stack: leftPanel
    })
}
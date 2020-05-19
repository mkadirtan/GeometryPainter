import threeCyclinderButtonImage from "../../../../media/images/threeCyclinderButton.png";
import threeCyclinderButtonActiveImage from "../../../../media/images/threeCyclinderButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import threeCyclinder from "../../../models/threeCyclinder/model"
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function threeCyclinderButton(){
    return new modelButton({
        name: "threeCyclinderButton",
        model: threeCyclinder,
        image: threeCyclinderButtonImage,
        activeImage: threeCyclinderButtonActiveImage,
        stack: leftPanel
    })
}
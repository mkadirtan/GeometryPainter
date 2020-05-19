import coneButtonImage from "../../../../media/images/coneButton.png";
import coneButtonActiveImage from "../../../../media/images/coneButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import cone from "../../../models/cone/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function coneButton(){
    return new modelButton({
        name: "coneButton",
        model: cone,
        image: coneButtonImage,
        activeImage: coneButtonActiveImage,
        stack: leftPanel
    })
}
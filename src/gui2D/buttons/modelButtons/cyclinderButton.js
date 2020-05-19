import cyclinderButtonImage from "../../../../media/images/cyclinderButton.png";
import cyclinderButtonActiveImage from "../../../../media/images/cyclinderButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import cyclinder from "../../../models/cyclinder/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function cyclinderButton(){
    return new modelButton({
        name: "cyclinderButton",
        model: cyclinder,
        image: cyclinderButtonImage,
        activeImage: cyclinderButtonActiveImage,
        stack: leftPanel
    })
}
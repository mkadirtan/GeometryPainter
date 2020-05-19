import boxButtonImage from "../../../../media/images/boxButton.png";
import boxButtonActiveImage from "../../../../media/images/boxButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import box from "../../../models/box/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function boxButton(){
    return new modelButton({
        name: "boxButton",
        model: box,
        image: boxButtonImage,
        activeImage: boxButtonActiveImage,
        stack: leftPanel
    })
}
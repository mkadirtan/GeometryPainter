import boxButtonImage from "../../../../media/images/boxButton.png";
import boxButtonActiveImage from "../../../../media/images/boxButtonActive.png";
import placeholderImage from "../../../../media/images/placeholderImage.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import customButton from "../customButton";
import box from "../../../models/box/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function boxButton(){
    let _placeholder = customButton({
        name: "placeholder",
        image: placeholderImage,
        onClick(){},
        stack: leftPanel,
        height: 2/5
    })
    return new modelButton({
        name: "boxButton",
        model: box,
        image: boxButtonImage,
        activeImage: boxButtonActiveImage,
        stack: leftPanel
    })
}
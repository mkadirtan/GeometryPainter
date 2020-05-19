import boxButtonImage from "../../../../media/images/boxButton.png";
import boxButtonActiveImage from "../../../../media/images/boxButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import customButton from "../customButton";
import box from "../../../models/box/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function boxButton(){
    return customButton({
        name: "boxButton",
        width: 2.2,
        image: boxButtonImage,
        onClick(){
            if(activeModel) {
                activeModel.dispose();
            }
            box();
        },
        activeImage: boxButtonActiveImage,
        stack: leftPanel
    })
}
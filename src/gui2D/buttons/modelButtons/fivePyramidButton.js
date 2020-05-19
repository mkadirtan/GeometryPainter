import fivePyramidButtonImage from "../../../../media/images/fivePyramidButton.png";
import fivePyramidButtonActiveImage from "../../../../media/images/fivePyramidButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import fivePyramid from "../../../models/fivePyramid/model";
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function fivePyramidButton(){
    return new modelButton({
        name: "fivePyramidButton",
        model: fivePyramid,
        image: fivePyramidButtonImage,
        activeImage: fivePyramidButtonActiveImage,
        stack: leftPanel
    })
}
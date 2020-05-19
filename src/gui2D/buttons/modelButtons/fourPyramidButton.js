import fourPyramidButtonImage from "../../../../media/images/fourPyramidButton.png";
import fourPyramidButtonActiveImage from "../../../../media/images/fourPyramidButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import fourPyramid from "../../../models/fourPyramid/model";
import { activeModelObservable } from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function fourPyramidButton(){
    return new modelButton({
        name: "fourPyramidButton",
        model: fourPyramid,
        image: fourPyramidButtonImage,
        activeImage: fourPyramidButtonActiveImage,
        stack: leftPanel
    })
}
import threePyramidButtonImage from "../../../../media/images/threePyramidButton.png";
import threePyramidButtonActiveImage from "../../../../media/images/threePyramidButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "./modelButton";
import threePyramid from "../../../models/threePyramid/model";
import { activeModelObservable } from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e);

export function threePyramidButton(){
    return new modelButton({
        name: "threePyramidButton",
        model: threePyramid,
        image: threePyramidButtonImage,
        activeImage: threePyramidButtonActiveImage,
        stack: leftPanel
    })
}
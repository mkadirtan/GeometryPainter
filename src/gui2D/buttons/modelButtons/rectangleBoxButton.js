import rectangleBoxButtonImage from "../../../../media/images/rectangleBoxButton.png";
import rectangleBoxButtonActiveImage from "../../../../media/images/rectangleBoxButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import modelButton from "../modelButtons/modelButton";
import rectangleBox from "../../../models/rectangleBox/model"
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e)

export function rectangleBoxButton(){
    return new modelButton({
        name: "rectangleBoxButton",
        model: rectangleBox,
        image: rectangleBoxButtonImage,
        activeImage: rectangleBoxButtonActiveImage,
        stack: leftPanel
    })
}
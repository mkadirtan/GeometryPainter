import rectangleBoxButtonImage from "../../../../media/images/rectangleBoxButton.png";
import rectangleBoxButtonActiveImage from "../../../../media/images/rectangleBoxButtonActive.png";
import { leftPanel } from "../../panels/leftPanel";
import customButton from "../customButton";
import rectangleBox from "../../../models/rectangleBox/model"
import {activeModelObservable} from "../../../utilities/activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>activeModel=e)

export function rectangleBoxButton(){
    return customButton({
        name: "rectangleBoxButton",
        width: 2.2,
        image: rectangleBoxButtonImage,
        onClick: () => {
            if(activeModel) {
                activeModel.dispose();
            }
            console.log(this);
            rectangleBox()
        },
        activeImage: rectangleBoxButtonActiveImage,
        stack: leftPanel
    })
}
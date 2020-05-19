import customButton from "./customButton";
import zoomInImage from "../../../media/images/zoomInImage.png"
import { rightPanel } from "../panels/rightPanel";

export function zoomInButton(){
    return customButton({
        name: "zoomIn",
        image: zoomInImage,
        onClick(){
            let cam = scene.activeCamera
            console.log(cam.radius);
            cam.radius *= 0.9
            if(cam.radius < 1.5) cam.radius = 1.5;
        },
        paddingTop: 4,
        stack: rightPanel,
    })
}
import customButton from "./customButton";
import zoomOutImage from "../../../media/images/zoomOutImage.png"
import { rightPanel } from "../panels/rightPanel";

export function zoomOutButton(){
    return customButton({
        name: "zoomOut",
        image: zoomOutImage,
        onClick(){
            let cam = scene.activeCamera
            console.log(cam.radius);
            cam.radius *= 1.1
            if(cam.radius > 10) cam.radius = 10;
        },
        stack: rightPanel,
    })
}
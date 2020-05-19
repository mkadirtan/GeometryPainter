import { edgesToggleObservable } from "../gui2D/buttons/edgesToggleButton";
import { activeModelObservable } from "./activeModel";

let activeModel = undefined;
activeModelObservable.add(e=>{
    activeModel = e;
    if(!activeModel) return;
    activeModel.edgesWidth = 2;
});

edgesToggleObservable.add(e=>{
    if(!activeModel) return;
    if(e){
        activeModel.mesh.enableEdgesRendering(0.999)
        activeModel.mesh.visibility = 0.5;
    } else {
        activeModel.mesh.disableEdgesRendering()
        activeModel.mesh.visibility = 1;
    }
})
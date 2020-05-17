import { edgesToggleObservable } from "../gui2D/edgesToggleButton";

export function attachEdgesToggleToModel(model){
    edgesToggleObservable.add(e=>{
        if(e){
            model.enableEdgesRendering(0.999)
            model.material.alpha = 0.5;
        } else {
            model.disableEdgesRendering()
            model.material.alpha = 1;
        }
    })
}

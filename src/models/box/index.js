import { BoxBuilder, StandardMaterial } from "@babylonjs/core";

import { scene } from "../../scene";
import { addLetters } from "../../utilities/letter";
import modelLetters from "./modelLetters";
import { attachEdgesToggleToModel } from "../../utilities/edgesRenderer";
import { attachGizmoToModel } from "../../utilities/gizmo";

export default function() {
    let model = BoxBuilder.CreateBox("box", {size: 1}, scene);
    model.edgesWidth = 2;
    model.material = new StandardMaterial("mat", scene);
    addLetters(modelLetters, model);
    attachEdgesToggleToModel(model);
    attachGizmoToModel(model);
}
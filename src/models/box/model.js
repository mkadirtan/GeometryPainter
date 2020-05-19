import { scene } from "../../scene";

import { BoxBuilder } from "@babylonjs/core";
import modelFaces from "./modelFaces";
import modelLetters from "./modelLetters";
import modelTemplate from "../modelTemplate";

function builderFunction(faceColors){
    return BoxBuilder.CreateBox("box", {
        size: 1,
        faceColors: faceColors,
    }, scene);
}

let model = new modelTemplate();

export default function() {
    model.init(6, modelLetters, modelFaces, builderFunction);
    return model;
}
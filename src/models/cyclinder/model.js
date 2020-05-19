import { scene } from "../../scene";

import { CylinderBuilder } from "@babylonjs/core";
import modelFaces from "./modelFaces";
import modelLetters from "./modelLetters";
import modelTemplate from "../modelTemplate";

function builderFunction(faceColors){
    return CylinderBuilder.CreateCylinder("cone", {
        height: 1,
        diameterTop: 1,
        diameterBottom: 1,
        tessellation: 32,
        subdivisions: 1,
        faceColors: faceColors,
    }, scene);
}

let model = new modelTemplate();

export default function() {
    model.init(3, modelLetters, modelFaces, builderFunction);
    return model;
}
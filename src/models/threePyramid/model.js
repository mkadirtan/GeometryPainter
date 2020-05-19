import {scene} from "../../scene";

import {PolyhedronBuilder} from "@babylonjs/core";
import modelFaces from "./modelFaces";
import modelLetters from "./modelLetters";
import {faces, vertex} from "./modelGeometry";
import modelTemplate from "../modelTemplate";

let _vertex = [];

for(let i = 0; i<vertex.length; i++){
    let newPosition = []
    vertex[i].position.toArray(newPosition, 0);
    _vertex.push(newPosition);
}


function builderFunction(faceColors){
    return PolyhedronBuilder.CreatePolyhedron("fourPyramid", {
        custom: {
            name: "fourPyramid",
            category: ["Muhammed Solids"],
            vertex: _vertex,
            face: faces
        },
        faceColors: faceColors
    }, scene);
}

let model = new modelTemplate();

export default function() {
    model.init(4, modelLetters, modelFaces, builderFunction);
    return model;
}
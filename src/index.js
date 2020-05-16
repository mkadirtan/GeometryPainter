import { MeshBuilder } from "@babylonjs/core";

import {scene} from './scene';
import './gui';

const newBox = MeshBuilder.CreateBox("box", {
    size: 0.5,
    updatable: true
}, scene)



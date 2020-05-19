//import "./utilities/gizmo"; //disabled Feature
import {engine, scene} from "./scene";
import "./utilities/edgesRenderer";
//import { gizmoToggleButton } from "./utilities/gizmo"; //disabled Feature
//import { takeSnapshotButton } from "./gui2D/buttons/takeSnapshotButton";
import { letterToggleButton } from "./gui2D/buttons/letterToggleButton";
import { edgesToggleButton } from "./gui2D/buttons/edgesToggleButton";
import { changeFaceColorButton } from "./gui2D/buttons/changeFaceColorButton";
import { zoomInButton } from "./gui2D/buttons/zoomInButton";
import { zoomOutButton } from "./gui2D/buttons/zoomOutButton";
import { boxButton } from "./gui2D/buttons/modelButtons/boxButton";
import { rectangleBoxButton } from "./gui2D/buttons/modelButtons/rectangleBoxButton";
import { coneButton } from "./gui2D/buttons/modelButtons/coneButton";
import { cyclinderButton } from "./gui2D/buttons/modelButtons/cyclinderButton";
import { fiveCyclinderButton } from "./gui2D/buttons/modelButtons/fiveCyclinderButton";
import { sixCyclinderButton } from "./gui2D/buttons/modelButtons/sixCyclinderButton";
import { threePyramidButton } from "./gui2D/buttons/modelButtons/threePyramidButton";
import { fourPyramidButton } from "./gui2D/buttons/modelButtons/fourPyramidButton";
import { fivePyramidButton } from "./gui2D/buttons/modelButtons/fivePyramidButton";
import { threeCyclinderButton } from "./gui2D/buttons/modelButtons/threeCyclinderButton";
import { startDrawingButton } from "./gui2D/buttons/startDrawingButton";
import { endDrawingButton } from "./gui2D/buttons/endDrawingButton";
import "./utilities/canvas";
import {Engine} from "@babylonjs/core";
import {selectDrawingColorButton} from "./gui2D/buttons/selectDrawingColorButton";
import {topRightLogoButton} from "./gui2D/buttons/topRightLogo";
import {bottomWebPageButton} from "./gui2D/buttons/bottomWebPage";
import {selectPenSizeButton} from "./gui2D/buttons/selectPenSizeButton";
// Run button commands in the order you want them to appear.
//gizmoToggleButton();
//takeSnapshotButton();

//modelPanel
boxButton();
rectangleBoxButton();
fiveCyclinderButton();
sixCyclinderButton();
cyclinderButton();
coneButton();
fivePyramidButton();
threePyramidButton();
fourPyramidButton();
threeCyclinderButton();

//utilitiesPanel
topRightLogoButton();

edgesToggleButton();
changeFaceColorButton();
letterToggleButton();

startDrawingButton();
selectDrawingColorButton();
selectPenSizeButton();
endDrawingButton();

zoomInButton();
zoomOutButton();

bottomWebPageButton();
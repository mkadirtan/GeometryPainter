//import "./utilities/gizmo"; //disabled Feature
import { scene } from "./scene";
import "./utilities/edgesRenderer";
//import { gizmoToggleButton } from "./utilities/gizmo"; //disabled Feature
import { letterToggleButton } from "./gui2D/buttons/letterToggleButton";
import { edgesToggleButton } from "./gui2D/buttons/edgesToggleButton";
import { changeFaceColorButton } from "./gui2D/buttons/changeFaceColorButton";
import { zoomInButton } from "./gui2D/buttons/zoomInButton";
import { zoomOutButton } from "./gui2D/buttons/zoomOutButton";
import { boxButton } from "./gui2D/buttons/modelButtons/boxButton";
import { rectangleBoxButton } from "./gui2D/buttons/modelButtons/rectangleBoxButton";

// Run button commands in the order you want them to appear.
edgesToggleButton();
changeFaceColorButton();
letterToggleButton();
zoomInButton();
zoomOutButton();
boxButton();
rectangleBoxButton();
//squarePyramid();
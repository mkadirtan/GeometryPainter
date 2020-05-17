import { advancedTexture } from "../advancedTexture";
import config from './gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

export let rightPanel = new StackPanel("rightPanel");
rightPanel.width = config.controlBaseSize + "px";
rightPanel.height = 0.75;
rightPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
rightPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
rightPanel.isVertical = true;

advancedTexture.addControl(rightPanel);
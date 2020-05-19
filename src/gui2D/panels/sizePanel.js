import { advancedTexture } from "../../advancedTexture";
import config from '../gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

export let sizePanel = new StackPanel("sizePanel");
sizePanel.width = 1.5 * config.controlBaseSize + "px";
sizePanel.height = 1;
sizePanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
sizePanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
sizePanel.isVertical = true;
sizePanel.left = (1920 - 2.5*config.controlBaseSize) + "px";
sizePanel.top = 5*config.controlBaseSize + "px";


advancedTexture.addControl(sizePanel);
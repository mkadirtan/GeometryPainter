import { advancedTexture } from "../advancedTexture";
import config from './gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

export let leftPanel = new StackPanel("leftPanel");

leftPanel.width = config.controlBaseSize + "px";
leftPanel.height = 0.75;
leftPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
leftPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
leftPanel.isVertical = true;

advancedTexture.addControl(leftPanel);
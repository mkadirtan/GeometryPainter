import { advancedTexture } from "../../advancedTexture";
import config from '../gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

export let leftPanel = new StackPanel("leftPanel");

leftPanel.width = 2.2*config.controlBaseSize + "px";
leftPanel.height = 1;
leftPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
leftPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
leftPanel.isVertical = true;

advancedTexture.addControl(leftPanel);
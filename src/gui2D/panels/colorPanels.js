import { advancedTexture } from "../../advancedTexture";
import config from '../gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

let colorPanel0 = new StackPanel("colorPanel0");

colorPanel0.width = config.controlBaseSize + "px";
colorPanel0.height = 1;
colorPanel0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel0.isVertical = true;
colorPanel0.left = (1920 - 2*config.controlBaseSize) + "px";

advancedTexture.addControl(colorPanel0);

let colorPanel1 = new StackPanel("colorPanel1");

colorPanel1.width = config.controlBaseSize + "px";
colorPanel1.height = 1;
colorPanel1.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel1.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel1.isVertical = true;
colorPanel1.left = (1920 - 3*config.controlBaseSize) + "px";

advancedTexture.addControl(colorPanel1);

let colorPanel2 = new StackPanel("colorPanel2");

colorPanel2.width = config.controlBaseSize + "px";
colorPanel2.height = 1;
colorPanel2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel2.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel2.isVertical = true;
colorPanel2.left = (1920 - 4*config.controlBaseSize) + "px";

advancedTexture.addControl(colorPanel2);

let colorPanel3 = new StackPanel("colorPanel3");

colorPanel3.width = config.controlBaseSize + "px";
colorPanel3.height = 1;
colorPanel3.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel3.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel3.isVertical = true;
colorPanel3.left = (1920 - 5*config.controlBaseSize) + "px";

advancedTexture.addControl(colorPanel3);

export default [colorPanel0, colorPanel1, colorPanel2, colorPanel3]